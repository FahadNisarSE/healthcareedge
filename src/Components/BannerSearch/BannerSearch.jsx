import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import search from '../../Assets/search.svg';
import './BannerSearch.css';

export default function BannerSearch() {
    const Navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [searchParams, setSearchParams] = useState({
        location: '',
        gender: '',
        department: ''
    });

    useEffect(() => {
        if (toggle) {
            Navigate('/doctors', { state: searchParams })
        }
    }, [toggle, Navigate, searchParams])

    function handleChange(event) {
        setSearchParams({
            ...searchParams,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="banner-search">
            <div className='search-image'>
                <img src={search} alt="search-illustration" />
            </div>
            <div className='location-search'>
                <label className='label' htmlFor="location">Location</label>
                <input type="text" id='location' name='location' onChange={handleChange} />
            </div>
            <div className='banner-search-section-2'>
                <div className='gender-search'>
                    <label className='label' htmlFor="gender">Gender</label>
                    <select className='select' name="gender" id="gender" onChange={handleChange}>
                        <option>Gender</option>
                        <option value='Male'>Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className='department-search'>
                    <label className='label' htmlFor="department">Department</label>
                    <select className='select' name="department" id="department" onChange={handleChange}>
                        <option>Department</option>
                        <option value='Cardiologist'>Cardiologist</option>
                        <option value="Gynacologist">Gynacologist</option>
                    </select>
                </div>
            </div>
            <div className='banner-search-button'>
                <button onClick={() => setToggle(prev => !prev)}>Search</button>
            </div>
        </div >
    )
}