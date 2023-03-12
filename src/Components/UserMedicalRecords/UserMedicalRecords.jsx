import './UserMedicalRecords.css'

const UserMedicalRecords = ({ medicalRecords }) => (
  <div className='profile-user-medicalrecords'>
    <div className='profile-user-medicalrecords-heading'>
      <h4 className='table-heading'>ID</h4>
      <h4 className='table-heading'>Date</h4>
      <h4 className='table-heading'>Description</h4>
      <h4 className='table-heading'>Attachment</h4>
      <h4 className='table-heading'>Created By</h4>
    </div>
    <div className='profile-user-medicalrecords-value-box'>
      {
        medicalRecords.map((record, index) => (
          <div className='profile-user-medicalrecords-value' key={record.name + index}>
            <div className='info-column'>
              <p className='info-value'>{record.id}</p>
            </div>
            <div className='info-column medicalrecords-date'>
              <p className='info-value'>{record.date}</p>
            </div>
            <div className='info-column'>
              <p className='info-value'>{record.description}</p>
            </div>
            <div className='info-column'>
              <a href='something' className='info-value'>{record.description}</a>
            </div>
            <div id='profile-user-medicalrecords-doctor' className='info-column'>
              <img src={record.image} alt={record.name} />
              <div className='profile-user-medicalrecords-doctor-info'>
                <h6>{record.name}</h6>
                <p>{record.sepciality}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)

export default UserMedicalRecords