import './Cursor.css';

import { AiOutlineRightCircle, AiOutlineLeftCircle } from 'react-icons/ai';

export default function Cursor({ direction, onclick }) {
    return (
        <div className={`circle-icon-box box-shadow ${direction ? 'left' : 'right'}`} onClick={onclick}>
            {
                direction ? <AiOutlineLeftCircle style={{ color: 'white' }} /> : <AiOutlineRightCircle style={{ color: 'white' }} />
            }
        </div>
    )
}
