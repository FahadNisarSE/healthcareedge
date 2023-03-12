import { FaEye } from 'react-icons/fa';

import './UserPrescriptions.css';

const UserPrescriptions = ({ prescriptions }) => (
  <>
    <div className='profile-user-prescription'>
      <div className='profile-user-prescription-heading'>
        <h4 className='table-heading'>Date</h4>
        <h4 className='table-heading'>Name</h4>
        <h4 className='table-heading'>Created by</h4>
        <h4 className='table-heading'> </h4>

      </div>
      <div className='profile-user-prescription-value-box'>
        {
          prescriptions.map((prescription, index) => (
            <div className='profile-user-prescription-value' key={prescription.name + index}>
              <div className='info-column'>
                <p className='info-value'>{prescription.date}</p>
              </div>
              <div className='info-column'>
                <p className='info-value'>Prescription {index + 1}</p>
              </div>
              <div id='profile-user-prescription-doctor' className='info-column'>
                <img src={prescription.image} alt={prescription.name} />
                <div className='profile-user-prescription-doctor-info'>
                  <h6>{prescription.name}</h6>
                  <p>{prescription.sepciality}</p>
                </div>
              </div>
              <div className='info-column view-prescription-button-container'>
                <button className='view-prescription-button'>
                  <FaEye /> View
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </>
)

export default UserPrescriptions