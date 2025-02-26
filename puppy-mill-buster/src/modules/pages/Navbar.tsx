import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="w3-top">
            <div className="w3-bar w3-white w3-padding w3-card">
                <button className="w3-bar-item w3-button"
                    onClick={() => navigate('/')}
                >Paw Print Surveillance</button>
                <div className="w3-right w3-hide-small">
                    <button className="w3-bar-item w3-button"
                        onClick={() => navigate('/report')}
                    >View Report</button>
                </div>
            </div>
        </div>
    )
}