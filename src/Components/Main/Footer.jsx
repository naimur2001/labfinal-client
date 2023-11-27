import { Link } from "react-router-dom"
import Swal from "sweetalert2";


const Footer = () => {
  const emailSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const emailInfo = { email };
  
    try {
      const response = await fetch('https://brta-server.vercel.app/subemail', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(emailInfo),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        form.reset()
        // Email submitted successfully
        Swal.fire({
          icon: 'success',
          title: 'Subscription Successful',
          text: 'Thank you for subscribing!',
        });
      } else {
        // Email already exists
        Swal.fire({
          icon: 'error',
          title: 'Subscription Failed',
          text: 'Email already subscribed.',
        });
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      Swal.fire({
        icon: 'error',
        title: 'Subscription Failed',
        text: 'An error occurred while processing your request.',
      });
    }
  };
  
  return (
    <div>
       <footer className="bg-gray-500 text-white py-10">
      <div className="container flex flex-col lg:flex-row justify-between items-center gap-5">

        {/* Contact Column */}
        <div className="text-lg font-bold text-center lg:w-1/3">
          <h2>Contact</h2>
          <p>Email: brta@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Important Links Column */}
        <div className="flex flex-col lg:w-1/3 space-y-4">
          <h2>Important Links</h2>
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/formfill" className="hover:text-gray-300">Form</Link>
          <Link to='/law'>Transport Law</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
        </div>

        {/* Subscribe Column */}
        <div className="flex flex-col lg:w-1/3 space-y-4">
          <h2>Subscribe</h2>
        <form onSubmit={emailSubmit}>
        <input type="email" name="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded mb-2" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
        </form>
        </div>

      </div>
    </footer>

    </div>
  )
}

export default Footer