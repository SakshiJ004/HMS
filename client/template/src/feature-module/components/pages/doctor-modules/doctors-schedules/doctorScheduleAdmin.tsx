// ============================================
// FILE: src/components/pages/clinic-modules/doctors-schedule/doctorScheduleAdmin.tsx
//
// हा file admin dashboard साठी आहे.
// Route: /doctor-schedule  (doctorScheduleClini)
// Admin कोणताही doctor select करून त्याचं schedule set करू शकतो.
// ============================================

import { useState, useEffect } from "react";
import { DatePicker, TimePicker, message } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router";
import {
    Location,
    Recures_Every,
    Session,
} from "../../../../../core/common/selectOption";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { getDoctors, getDoctor, updateDoctorSchedule } from "../../../../../api/doctorService";

interface TimeSlot {
    id: number;
    session: any;
    from: Dayjs | null;
    to: Dayjs | null;
}

interface DaySchedule {
    [key: string]: TimeSlot[];
}

interface DoctorOption {
    value: string;
    label: string;
}

const emptySchedules = (): DaySchedule => ({
    monday: [{ id: Date.now(), session: Session[0], from: null, to: null }],
    tuesday: [{ id: Date.now() + 1, session: Session[0], from: null, to: null }],
    wednesday: [{ id: Date.now() + 2, session: Session[0], from: null, to: null }],
    thursday: [{ id: Date.now() + 3, session: Session[0], from: null, to: null }],
    friday: [{ id: Date.now() + 4, session: Session[0], from: null, to: null }],
    saturday: [{ id: Date.now() + 5, session: Session[0], from: null, to: null }],
    sunday: [{ id: Date.now() + 6, session: Session[0], from: null, to: null }],
});

const DoctorScheduleAdmin = () => {
    const getModalContainer = () => {
        const modalElement = document.getElementById("modal-datepicker");
        return modalElement ? modalElement : document.body;
    };

    // Doctor list & selection
    const [doctorOptions, setDoctorOptions] = useState<DoctorOption[]>([]);
    const [selectedDoctor, setSelectedDoctor] = useState<DoctorOption | null>(null);

    const [loadingDoctors, setLoadingDoctors] = useState(false);

    // Form state
    const [location, setLocation] = useState(Location[0]);
    const [fromDate, setFromDate] = useState<Dayjs | null>(null);
    const [toDate, setToDate] = useState<Dayjs | null>(null);
    const [recuresEvery, setRecuresEvery] = useState(Recures_Every[0]);
    const [loading, setLoading] = useState(false);
    const [schedules, setSchedules] = useState<DaySchedule>(emptySchedules());

    // Fetch all doctors on mount
    useEffect(() => {
        fetchAllDoctors();
    }, []);

    // Fetch selected doctor's existing schedule
    useEffect(() => {
        if (selectedDoctor?.value) {
            fetchDoctorSchedule(selectedDoctor.value);
        } else {
            // Reset form when no doctor selected
            setSchedules(emptySchedules());
            setFromDate(null);
            setToDate(null);
        }
    }, [selectedDoctor]);

    const handleDoctorChange = (option: DoctorOption | null) => {
        setSelectedDoctor(option);
    };

    const fetchAllDoctors = async () => {
        setLoadingDoctors(true);
        try {
            const response = await getDoctors();
            if (response.success && response.data) {
                const options = response.data.map((doc: any) => ({
                    value: doc._id,
                    label: doc.fullName || `${doc.firstName} ${doc.lastName}`,
                }));
                setDoctorOptions(options);
            }
        } catch (error: any) {
            console.error("Error fetching doctors:", error);
            message.error("Failed to load doctors list");
        } finally {
            setLoadingDoctors(false);
        }
    };

    const fetchDoctorSchedule = async (doctorId: string) => {
        try {
            const response = await getDoctor(doctorId);
            if (response.success && response.data) {
                const doctorData = response.data;

                // Load existing dates if available
                if (doctorData.fromDate) setFromDate(dayjs(doctorData.fromDate));
                else setFromDate(null);

                if (doctorData.toDate) setToDate(dayjs(doctorData.toDate));
                else setToDate(null);

                // Load existing schedules
                if (doctorData.schedules && doctorData.schedules.length > 0) {
                    const loadedSchedules: DaySchedule = emptySchedules();

                    doctorData.schedules.forEach((daySchedule: any) => {
                        const dayKey = daySchedule.day.toLowerCase();
                        if (daySchedule.timeSlots && daySchedule.timeSlots.length > 0) {
                            loadedSchedules[dayKey] = daySchedule.timeSlots.map(
                                (slot: any, index: number) => ({
                                    id: Date.now() + Math.random() + index,
                                    session: Session[0],
                                    from: slot.startTime ? dayjs(slot.startTime, "HH:mm") : null,
                                    to: slot.endTime ? dayjs(slot.endTime, "HH:mm") : null,
                                })
                            );
                        }
                    });

                    setSchedules(loadedSchedules);
                } else {
                    setSchedules(emptySchedules());
                }
            }
        } catch (error: any) {
            console.error("Error fetching doctor schedule:", error);
            message.error("Failed to load doctor's schedule");
        }
    };

    const handleAddSchedule = (day: string) => {
        const newRow: TimeSlot = {
            id: Date.now() + Math.random(),
            session: Session[0],
            from: null,
            to: null,
        };
        setSchedules((prev) => ({ ...prev, [day]: [...prev[day], newRow] }));
    };

    const handleDeleteSchedule = (day: string, id: number) => {
        setSchedules((prev) => ({
            ...prev,
            [day]: prev[day].filter((row) => row.id !== id),
        }));
    };

    const handleSessionChange = (day: string, id: number, newSession: any) => {
        setSchedules((prev) => ({
            ...prev,
            [day]: prev[day].map((slot) =>
                slot.id === id ? { ...slot, session: newSession } : slot
            ),
        }));
    };

    const handleTimeChange = (
        day: string,
        id: number,
        field: "from" | "to",
        time: Dayjs | null
    ) => {
        setSchedules((prev) => ({
            ...prev,
            [day]: prev[day].map((slot) =>
                slot.id === id ? { ...slot, [field]: time } : slot
            ),
        }));
    };

    const validateSchedules = () => {
        if (!selectedDoctor) {
            message.error("Please select a doctor first");
            return false;
        }

        let hasAtLeastOneSlot = false;
        for (const day in schedules) {
            for (const slot of schedules[day]) {
                if (slot.from && slot.to) {
                    const fromMinutes = slot.from.hour() * 60 + slot.from.minute();
                    const toMinutes = slot.to.hour() * 60 + slot.to.minute();

                    if (fromMinutes === 0 && toMinutes === 0) continue;

                    hasAtLeastOneSlot = true;

                    if (toMinutes <= fromMinutes) {
                        message.error(
                            `Invalid time for ${day}: End time must be after start time`
                        );
                        return false;
                    }
                }
            }
        }

        if (!hasAtLeastOneSlot) {
            message.error("Please add at least one time slot");
            return false;
        }

        return true;
    };

    const handleSaveChanges = async () => {
        if (!validateSchedules()) return;

        setLoading(true);
        try {
            const formattedSchedules = Object.keys(schedules).map((day) => ({
                day: day.charAt(0).toUpperCase() + day.slice(1),
                timeSlots: schedules[day]
                    .filter((slot) => {
                        if (!slot.from || !slot.to) return false;
                        const fromMinutes = slot.from.hour() * 60 + slot.from.minute();
                        const toMinutes = slot.to.hour() * 60 + slot.to.minute();
                        return !(fromMinutes === 0 && toMinutes === 0);
                    })
                    .map((slot) => ({
                        startTime: slot.from!.format("HH:mm"),
                        endTime: slot.to!.format("HH:mm"),
                    })),
            }));

            const scheduleData = {
                schedules: formattedSchedules,
                location: location?.value || location,
                fromDate: fromDate ? fromDate.format("YYYY-MM-DD") : undefined,
                toDate: toDate ? toDate.format("YYYY-MM-DD") : undefined,
                recuresEvery: recuresEvery?.value || recuresEvery,
            };

            // ✅ Admin selectedDoctor._id वापरतो, स्वतःचा नाही
            await updateDoctorSchedule(selectedDoctor!.value, scheduleData);
            message.success(
                `Schedule updated successfully for ${selectedDoctor!.label}!`
            );

            // Refresh
            await fetchDoctorSchedule(selectedDoctor!.value);
        } catch (error: any) {
            console.error("Error updating schedule:", error);
            message.error(error.message || "Failed to update schedule");
        } finally {
            setLoading(false);
        }
    };

    const renderScheduleRows = (daySchedules: TimeSlot[], day: string) =>
        daySchedules.map((row, idx) => (
            <div className="row gx-3" key={row.id}>
                <div className="col-lg-5">
                    <div className="mb-3">
                        <label className="form-label">Session</label>
                        <CommonSelect
                            options={Session}
                            className="select"
                            value={row.session}
                            onChange={(option: any) =>
                                handleSessionChange(day, row.id, option)
                            }
                        />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="row align-items-end gx-3">
                        <div className="col-lg-9">
                            <div className="row gx-3">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">From</label>
                                        <div className="input-icon-end position-relative">
                                            <TimePicker
                                                className="form-control"
                                                value={row.from}
                                                onChange={(time) =>
                                                    handleTimeChange(day, row.id, "from", time)
                                                }
                                                format="HH:mm"
                                                placeholder="Select time"
                                            />
                                            <span className="input-icon-addon">
                                                <i className="ti ti-clock-hour-10" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">To</label>
                                        <div className="input-icon-end position-relative">
                                            <TimePicker
                                                className="form-control"
                                                value={row.to}
                                                onChange={(time) =>
                                                    handleTimeChange(day, row.id, "to", time)
                                                }
                                                format="HH:mm"
                                                placeholder="Select time"
                                            />
                                            <span className="input-icon-addon">
                                                <i className="ti ti-clock-hour-10" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mb-3 d-flex gap-2">
                                {idx === 0 ? (
                                    <Link
                                        to="#"
                                        className="add-schedule-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleAddSchedule(day);
                                        }}
                                    >
                                        <i className="ti ti-plus fs-16" />
                                    </Link>
                                ) : (
                                    <Link
                                        to="#"
                                        className="delete-schedule-btn p-2 bg-danger btn-icon text-white rounded d-flex align-items-center justify-content-center"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleDeleteSchedule(day, row.id);
                                        }}
                                    >
                                        <i className="ti ti-trash fs-16" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/* Header */}
                            <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
                                <div className="flex-grow-1">
                                    <h4 className="fw-bold mb-0">Doctor Schedule</h4>
                                </div>
                                <div className="text-end d-flex">
                                    <div className="dropdown me-1">
                                        <Link
                                            to="#"
                                            className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                        >
                                            Export
                                            <i className="ti ti-chevron-down ms-2" />
                                        </Link>
                                        <ul className="dropdown-menu p-2">
                                            <li>
                                                <Link className="dropdown-item" to="#">
                                                    Download as PDF
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="#">
                                                    Download as Excel
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* ✅ Doctor Selection Card - Admin साठी extra card */}
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h6 className="fw-bold mb-3">
                                        <i className="ti ti-user-md me-2 text-primary" />
                                        Select Doctor
                                    </h6>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-0">
                                                <label className="form-label">
                                                    Doctor <span className="text-danger">*</span>
                                                </label>
                                                <CommonSelect
                                                    options={doctorOptions}
                                                    className="select"
                                                    value={selectedDoctor || undefined}
                                                    onChange={handleDoctorChange}
                                                    placeholder={
                                                        loadingDoctors
                                                            ? "Loading doctors..."
                                                            : "Select a doctor to manage schedule"
                                                    }
                                                />
                                                {!selectedDoctor && (
                                                    <small className="text-muted mt-1 d-block">
                                                        Please select a doctor to view or edit their schedule.
                                                    </small>
                                                )}
                                            </div>
                                        </div>
                                        {selectedDoctor && (
                                            <div className="col-lg-6 d-flex align-items-end">
                                                <div className="alert alert-info mb-0 py-2 px-3 w-100">
                                                    <i className="ti ti-info-circle me-1" />
                                                    Managing schedule for:{" "}
                                                    <strong>{selectedDoctor.label}</strong>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Schedule Form - फक्त doctor select केल्यावर दाखवायचं */}
                            {selectedDoctor ? (
                                <>
                                    <div className="card">
                                        <div className="card-body">
                                            {/* Schedule Detail */}
                                            <div className="border-bottom mb-3">
                                                <h6 className="fw-bold mb-3">Schedule Detail</h6>
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Location</label>
                                                            <CommonSelect
                                                                options={Location}
                                                                className="select"
                                                                value={location}
                                                                onChange={(option: any) => setLocation(option)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">From</label>
                                                            <div className="input-icon-end position-relative">
                                                                <DatePicker
                                                                    className="form-control datetimepicker"
                                                                    format="DD-MM-YYYY"
                                                                    value={fromDate}
                                                                    onChange={(date) => setFromDate(date)}
                                                                    getPopupContainer={getModalContainer}
                                                                    placeholder="DD-MM-YYYY"
                                                                    suffixIcon={null}
                                                                />
                                                                <span className="input-icon-addon">
                                                                    <i className="ti ti-calendar" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">To</label>
                                                            <div className="input-icon-end position-relative">
                                                                <DatePicker
                                                                    className="form-control datetimepicker"
                                                                    format="DD-MM-YYYY"
                                                                    value={toDate}
                                                                    onChange={(date) => setToDate(date)}
                                                                    getPopupContainer={getModalContainer}
                                                                    placeholder="DD-MM-YYYY"
                                                                    suffixIcon={null}
                                                                />
                                                                <span className="input-icon-addon">
                                                                    <i className="ti ti-calendar" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Recures Every</label>
                                                            <CommonSelect
                                                                options={Recures_Every}
                                                                className="select"
                                                                value={recuresEvery}
                                                                onChange={(option: any) =>
                                                                    setRecuresEvery(option)
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Day-wise Schedules */}
                                            <div>
                                                <h6 className="fw-bold mb-3">Schedules</h6>
                                                <ul
                                                    className="nav nav-pills schedule-tab mb-3"
                                                    id="pills-tab2"
                                                    role="tablist"
                                                >
                                                    {Object.keys(schedules).map((day, index) => (
                                                        <li
                                                            className="nav-item me-1"
                                                            role="presentation"
                                                            key={day}
                                                        >
                                                            <button
                                                                className={`nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto ${index === 0 ? "active" : ""
                                                                    }`}
                                                                data-bs-toggle="pill"
                                                                data-bs-target={`#schedules-${day}`}
                                                                type="button"
                                                                role="tab"
                                                                aria-selected={index === 0}
                                                            >
                                                                {day.charAt(0).toUpperCase() + day.slice(1)}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="tab-content" id="pills-tabContent2">
                                                    {Object.keys(schedules).map((day, index) => (
                                                        <div
                                                            key={day}
                                                            className={`tab-pane fade ${index === 0 ? "active show" : ""
                                                                }`}
                                                            id={`schedules-${day}`}
                                                            role="tabpanel"
                                                        >
                                                            <div className="add-schedule-list">
                                                                {renderScheduleRows(schedules[day], day)}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="modal-footer d-flex align-items-center gap-1">
                                        <button
                                            type="button"
                                            className="btn btn-white border"
                                            onClick={() => window.history.back()}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleSaveChanges}
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" />
                                                    Saving...
                                                </>
                                            ) : (
                                                "Save Changes"
                                            )}
                                        </button>
                                    </div>
                                </>
                            ) : (
                                /* Doctor select नाही केला तर placeholder दाखवायचं */
                                <div className="card">
                                    <div className="card-body text-center py-5">
                                        <i className="ti ti-calendar-off fs-1 text-muted mb-3 d-block" />
                                        <h6 className="text-muted">No Doctor Selected</h6>
                                        <p className="text-muted mb-0">
                                            Please select a doctor from the dropdown above to view or
                                            manage their schedule.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="footer text-center bg-white p-2 border-top">
                    <p className="text-dark mb-0">
                        2025 ©
                        <Link to="#" className="link-primary">
                            Preclinic
                        </Link>
                        , All Rights Reserved
                    </p>
                </div>
            </div>
        </>
    );
};

export default DoctorScheduleAdmin;