// import { Link } from "react-router";
// import { LocationsData } from "../../../../../core/json/locationData";
// import Datatable from "../../../../../core/common/dataTable";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import Modals from "./modals/modals";

// const Locations = () => {
//   const data = LocationsData;
//   const columns = [
//     {
//       title: "Clinic Name",
//       dataIndex: "Clinic_Name",
//       render: (text: any, render: any) => (
//         <div className="d-flex align-items-center">
//           <Link to="#" className="avatar avatar-md me-2">
//             <ImageWithBasePath
//               src={`assets/img/icons/${render.img}`}
//               alt="img"
//               className="rounded-circle"
//             />
//           </Link>
//           <Link to="#" className="text-dark fw-semibold">
//             {text}
//           </Link>
//           <span className="badge badge-soft-success border border-success fw-medium ms-2">
//             {render.Span}
//           </span>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Clinic_Name.length - b.Clinic_Name.length,
//     },
//     {
//       title: "Address",
//       dataIndex: "Address",
//       sorter: (a: any, b: any) => a.Address.length - b.Address.length,
//     },

//     {
//       title: "",
//       render: () => (
//         <div className="action-item">
//           <Link to="#" data-bs-toggle="dropdown">
//             <i className="ti ti-dots-vertical" />
//           </Link>
//           <ul className="dropdown-menu p-2">
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#edit_modal"
//               >
//                 Edit
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#delete_modal"
//               >
//                 Delete
//               </Link>
//             </li>
//           </ul>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Status.length - b.Status.length,
//     },
//   ];
//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* Start Page Header */}
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-bold mb-0">
//                 Locations
//                 <span className="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1">
//                   Total Location : 565
//                 </span>
//               </h4>
//             </div>
//             <div className="text-end d-flex">
//               <Link
//                 to="#"
//                 className="btn btn-primary fs-13 btn-md"
//                 data-bs-toggle="modal"
//                 data-bs-target="#add_modal"
//               >
//                 <i className="ti ti-plus me-1" />
//                 New Location
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/*  Start Table */}
//           <div className="table-responsive">
//             <Datatable
//               columns={columns}
//               dataSource={data}
//               Selection={false}
//               searchText={""}
//             />
//           </div>
//           {/*  End Table */}
//         </div>
//         {/* End Content */}
//         {/* Footer Start */}
//         <div className="footer text-center bg-white p-2 border-top">
//           <p className="text-dark mb-0">
//             2025 ©
//             <Link to="#" className="link-primary">
//               Preclinic
//             </Link>
//             , All Rights Reserved
//           </p>
//         </div>
//         {/* Footer End */}
//       </div>
//       {/* ========================
// 			End Page Content
// 		========================= */}
//       <Modals />
//     </>
//   );
// };

// export default Locations;


// import { useState, useEffect } from "react";
// import { Link } from "react-router";
// import Datatable from "../../../../../core/common/dataTable";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// // import LocationsModal, { LocationFormData } from "./modals/locationsModal";
// import LocationsModal, { type LocationFormData } from "./modals/modals";
// import {
//   getLocations,
//   createLocation,
//   updateLocation,
//   deleteLocation,
// } from "../../../../../api/locationService";

// interface LocationData {
//   key: string;
//   _id?: string;
//   name: string;
//   locationType: string;
//   email: string;
//   phone: string;
//   address1: string;
//   address2: string;
//   country: string;
//   state: string;
//   city: string;
//   pincode: string;
//   image: string;
//   status: string;
//   // Display fields for table
//   Clinic_Name: string;
//   Address: string;
//   Span: string;
// }

// const Locations = () => {
//   const [data, setData] = useState<LocationData[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Modal states
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [currentLocation, setCurrentLocation] = useState<any>(null);

//   // ===================== Fetch Locations =====================
//   const fetchLocations = async () => {
//     try {
//       setLoading(true);
//       const response = await getLocations();

//       if (response.success && response.data) {
//         const formatted: LocationData[] = response.data.map((loc: any) => ({
//           key: loc._id,
//           _id: loc._id,
//           name: loc.name,
//           locationType: loc.locationType,
//           email: loc.email,
//           phone: loc.phone,
//           address1: loc.address1,
//           address2: loc.address2 || "",
//           country: loc.country,
//           state: loc.state,
//           city: loc.city,
//           pincode: loc.pincode,
//           image: loc.image || "",
//           status: loc.status,
//           // Table display fields
//           Clinic_Name: loc.name,
//           Address: `${loc.address1}${loc.address2 ? ", " + loc.address2 : ""}, ${loc.city}, ${loc.state} - ${loc.pincode}`,
//           Span: loc.locationType,
//         }));
//         setData(formatted);
//       } else {
//         setData([]);
//       }
//     } catch (error) {
//       console.error("Error fetching locations:", error);
//       setData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLocations();
//   }, []);

//   // ===================== Columns =====================
//   const columns = [
//     {
//       title: "Clinic Name",
//       dataIndex: "Clinic_Name",
//       render: (text: any, record: any) => (
//         <div className="d-flex align-items-center">
//           <Link to="#" className="avatar avatar-md me-2">
//             {record.image ? (
//               <img
//                 src={record.image}
//                 alt="clinic"
//                 className="rounded-circle w-100 h-100 object-fit-cover"
//               />
//             ) : (
//               <ImageWithBasePath
//                 src="assets/img/icons/clinic-08.svg"
//                 alt="img"
//                 className="rounded-circle"
//               />
//             )}
//           </Link>
//           <Link to="#" className="text-dark fw-semibold">
//             {text}
//           </Link>
//           <span className="badge badge-soft-success border border-success fw-medium ms-2">
//             {record.Span}
//           </span>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Clinic_Name.localeCompare(b.Clinic_Name),
//     },
//     {
//       title: "Address",
//       dataIndex: "Address",
//       sorter: (a: any, b: any) => a.Address.localeCompare(b.Address),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (text: string) => (
//         <span
//           className={`badge border ${text === "Active"
//               ? "badge-soft-success border-success"
//               : "badge-soft-danger border-danger"
//             } px-2 py-1 fs-13 fw-medium`}
//         >
//           {text}
//         </span>
//       ),
//       sorter: (a: any, b: any) => a.status.localeCompare(b.status),
//     },
//     {
//       title: "",
//       render: (_: any, record: any) => (
//         <div className="action-item">
//           <div className="dropdown">
//             <button
//               className="btn btn-sm btn-white border-0"
//               type="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               <i className="ti ti-dots-vertical" />
//             </button>
//             <ul className="dropdown-menu dropdown-menu-end p-2">
//               <li>
//                 <button
//                   className="dropdown-item d-flex align-items-center"
//                   type="button"
//                   onClick={() => {
//                     setCurrentLocation(record);
//                     setShowEditModal(true);
//                   }}
//                 >
//                   <i className="ti ti-edit me-2" />
//                   Edit
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="dropdown-item d-flex align-items-center text-danger"
//                   type="button"
//                   onClick={() => {
//                     setCurrentLocation(record);
//                     setShowDeleteModal(true);
//                   }}
//                 >
//                   <i className="ti ti-trash me-2" />
//                   Delete
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   // ===================== CRUD Handlers =====================
//   const handleAddLocation = async (formData: LocationFormData) => {
//     try {
//       const response = await createLocation(formData);

//       if (response.success) {
//         await fetchLocations();
//         setShowAddModal(false);
//       } else {
//         alert(response.message || "Failed to add location. Please try again.");
//       }
//     } catch (error) {
//       console.error("Add location error:", error);
//       alert("Error adding location. Please try again.");
//     }
//   };

//   const handleEditLocation = async (formData: LocationFormData) => {
//     if (currentLocation && currentLocation._id) {
//       try {
//         const response = await updateLocation(currentLocation._id, formData);

//         if (response.success) {
//           await fetchLocations();
//           setShowEditModal(false);
//           setCurrentLocation(null);
//         } else {
//           alert(response.message || "Failed to update location. Please try again.");
//         }
//       } catch (error) {
//         console.error("Update location error:", error);
//         alert("Error updating location. Please try again.");
//       }
//     }
//   };

//   const handleDeleteLocation = async () => {
//     if (currentLocation && currentLocation._id) {
//       try {
//         const response = await deleteLocation(currentLocation._id);

//         if (response.success) {
//           await fetchLocations();
//           setShowDeleteModal(false);
//           setCurrentLocation(null);
//         } else {
//           alert(response.message || "Failed to delete location. Please try again.");
//         }
//       } catch (error) {
//         console.error("Delete location error:", error);
//         alert("Error deleting location. Please try again.");
//       }
//     }
//   };

//   // ===================== Loading =====================
//   if (loading) {
//     return (
//       <div className="page-wrapper">
//         <div className="content">
//           <div className="text-center py-5">
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ===================== Render =====================
//   return (
//     <>
//       <div className="page-wrapper">
//         <div className="content">
//           {/* Page Header */}
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-bold mb-0">
//                 Locations
//                 <span className="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1">
//                   Total Location : {data.length}
//                 </span>
//               </h4>
//             </div>
//             <div className="text-end d-flex">
//               <Link
//                 to="#"
//                 className="btn btn-primary fs-13 btn-md"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setShowAddModal(true);
//                 }}
//               >
//                 <i className="ti ti-plus me-1" />
//                 New Location
//               </Link>
//             </div>
//           </div>

//           {/* Table */}
//           <div className="table-responsive">
//             <Datatable
//               columns={columns}
//               dataSource={data}
//               Selection={false}
//               searchText={""}
//             />
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="footer text-center bg-white p-2 border-top">
//           <p className="text-dark mb-0">
//             2025 ©
//             <Link to="#" className="link-primary">
//               Preclinic
//             </Link>
//             , All Rights Reserved
//           </p>
//         </div>
//       </div>

//       {/* Modals */}
//       <LocationsModal
//         showAddModal={showAddModal}
//         showEditModal={showEditModal}
//         showDeleteModal={showDeleteModal}
//         currentLocation={currentLocation}
//         onCloseAdd={() => setShowAddModal(false)}
//         onCloseEdit={() => setShowEditModal(false)}
//         onCloseDelete={() => setShowDeleteModal(false)}
//         onAdd={handleAddLocation}
//         onEdit={handleEditLocation}
//         onDelete={handleDeleteLocation}
//       />
//     </>
//   );
// };

// export default Locations;


import { useState, useEffect } from "react";
import { Link } from "react-router";
import Datatable from "../../../../../core/common/dataTable";
// import LocationsModal, { LocationFormData } from "./modals/locationsModal";
import {
  getLocations,
  createLocation,
  updateLocation,
  deleteLocation,
} from "../../../../../api/locationService";
import type { LocationFormData } from "./modals/modals";
import LocationsModal from "./modals/modals";

interface LocationData {
  key: string;
  _id?: string;
  name: string;
  locationType: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
  image: string;
  status: string;
  // Display fields for table
  Clinic_Name: string;
  Address: string;
  Span: string;
}

const Locations = () => {
  const [data, setData] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<any>(null);

  // ===================== Fetch Locations =====================
  const fetchLocations = async () => {
    try {
      setLoading(true);
      const response = await getLocations();

      if (response.success && response.data) {
        const formatted: LocationData[] = response.data.map((loc: any) => ({
          key: loc._id,
          _id: loc._id,
          name: loc.name,
          locationType: loc.locationType,
          email: loc.email,
          phone: loc.phone,
          address1: loc.address1,
          address2: loc.address2 || "",
          country: loc.country,
          state: loc.state,
          city: loc.city,
          pincode: loc.pincode,
          image: loc.image || "",
          status: loc.status,
          // Table display fields
          Clinic_Name: loc.name,
          Address: `${loc.address1}${loc.address2 ? ", " + loc.address2 : ""}, ${loc.city}, ${loc.state} - ${loc.pincode}`,
          Span: loc.locationType,
        }));
        setData(formatted);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  // ===================== Columns =====================
  const columns = [
    {
      title: "Clinic Name",
      dataIndex: "Clinic_Name",
      render: (text: any, record: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md me-2 bg-light d-flex align-items-center justify-content-center rounded-circle overflow-hidden">
            {record.image ? (
              <img
                src={record.image}
                alt="clinic"
                className="rounded-circle w-100 h-100 object-fit-cover"
              />
            ) : (
              <i className="ti ti-building-hospital text-muted fs-18" />
            )}
          </Link>
          <Link to="#" className="text-dark fw-semibold">
            {text}
          </Link>
          <span className="badge badge-soft-success border border-success fw-medium ms-2">
            {record.Span}
          </span>
        </div>
      ),
      sorter: (a: any, b: any) => a.Clinic_Name.localeCompare(b.Clinic_Name),
    },
    {
      title: "Address",
      dataIndex: "Address",
      sorter: (a: any, b: any) => a.Address.localeCompare(b.Address),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text: string) => (
        <span
          className={`badge border ${text === "Active"
              ? "badge-soft-success border-success"
              : "badge-soft-danger border-danger"
            } px-2 py-1 fs-13 fw-medium`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.status.localeCompare(b.status),
    },
    {
      title: "",
      render: (_: any, record: any) => (
        <div className="action-item">
          <div className="dropdown">
            <button
              className="btn btn-sm btn-white border-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ti ti-dots-vertical" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end p-2">
              <li>
                <button
                  className="dropdown-item d-flex align-items-center"
                  type="button"
                  onClick={() => {
                    setCurrentLocation(record);
                    setShowEditModal(true);
                  }}
                >
                  <i className="ti ti-edit me-2" />
                  Edit
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item d-flex align-items-center text-danger"
                  type="button"
                  onClick={() => {
                    setCurrentLocation(record);
                    setShowDeleteModal(true);
                  }}
                >
                  <i className="ti ti-trash me-2" />
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  // ===================== CRUD Handlers =====================
  const handleAddLocation = async (formData: LocationFormData) => {
    try {
      const response = await createLocation(formData);

      if (response.success) {
        await fetchLocations();
        setShowAddModal(false);
      } else {
        alert(response.message || "Failed to add location. Please try again.");
      }
    } catch (error) {
      console.error("Add location error:", error);
      alert("Error adding location. Please try again.");
    }
  };

  const handleEditLocation = async (formData: LocationFormData) => {
    if (currentLocation && currentLocation._id) {
      try {
        const response = await updateLocation(currentLocation._id, formData);

        if (response.success) {
          await fetchLocations();
          setShowEditModal(false);
          setCurrentLocation(null);
        } else {
          alert(response.message || "Failed to update location. Please try again.");
        }
      } catch (error) {
        console.error("Update location error:", error);
        alert("Error updating location. Please try again.");
      }
    }
  };

  const handleDeleteLocation = async () => {
    if (currentLocation && currentLocation._id) {
      try {
        const response = await deleteLocation(currentLocation._id);

        if (response.success) {
          await fetchLocations();
          setShowDeleteModal(false);
          setCurrentLocation(null);
        } else {
          alert(response.message || "Failed to delete location. Please try again.");
        }
      } catch (error) {
        console.error("Delete location error:", error);
        alert("Error deleting location. Please try again.");
      }
    }
  };

  // ===================== Loading =====================
  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== Render =====================
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">
                Locations
                <span className="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1">
                  Total Location : {data.length}
                </span>
              </h4>
            </div>
            <div className="text-end d-flex">
              <Link
                to="#"
                className="btn btn-primary fs-13 btn-md"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAddModal(true);
                }}
              >
                <i className="ti ti-plus me-1" />
                New Location
              </Link>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <Datatable
              columns={columns}
              dataSource={data}
              Selection={false}
              searchText={""}
            />
          </div>
        </div>

        {/* Footer */}
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

      {/* Modals */}
      <LocationsModal
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        currentLocation={currentLocation}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => setShowEditModal(false)}
        onCloseDelete={() => setShowDeleteModal(false)}
        onAdd={handleAddLocation}
        onEdit={handleEditLocation}
        onDelete={handleDeleteLocation}
      />
    </>
  );
};

export default Locations;