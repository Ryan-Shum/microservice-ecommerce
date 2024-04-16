const Footer = () => {
    return(
    <footer className="footer">
    <div className="container-fluid">
      <div className="row text-md-left text-center">
        <div className="col-md-4 footer-column">
          <h3>E-Commerce</h3>
          <p>Find the perfect products on our website!</p>
        </div>
  
        <div className="col-md-4 footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="/">Browse Products</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
  
        <div className="col-md-4 footer-column">
          <h3>Contact Us</h3>
          <ul className="footer-links">
            <li><a href="tel:+123456789">+1 234 567 89</a></li>
          </ul>
        </div>
      </div>
  
      <div className="row mt-4">
        <div className="col-12 text-center">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
  
      <div className="row mt-4">
        <div className="col-12 text-center">
          <p>&copy; 2024 Ecommerce. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
    );
}

export default Footer;