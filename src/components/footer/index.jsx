import './styles.css';
import React from 'react';

function Footer() {
    return ( 
        <footer className="footer">
            <div className="body-links-footer">
                <span className="link-footer">FAQ</span>
                <span className="link-footer">Investor Relations</span>
                <span className="link-footer">Ways to Watch</span>
                <span className="link-footer">Corporate Information</span>
                <span className="link-footer">Only on Netflix</span>
            </div>
            <div className="body-links-footer">
                <span className="link-footer">Help Center</span>
                <span className="link-footer">Jobs</span>
                <span className="link-footer">Terms of Use</span>
                <span className="link-footer">Contact Us</span>
            </div>
            <div className="body-links-footer">
                <span className="link-footer">Account</span>
                <span className="link-footer">Redeem Gift Cards</span>
                <span className="link-footer">Privacy</span>
                <span className="link-footer">Speed Test</span>
            </div>
            <div className="body-links-footer">
                <span className="link-footer">Media Center</span>
                <span className="link-footer">Buy Gift Cards</span>
                <span className="link-footer">Cookie Preferences</span>
                <span className="link-footer">Legal Notices</span>
            </div>
        </footer>
     );
}

export default React.memo(Footer);