<template>
  <div class="contact">
    <div class="container">
      <div class="section-header text-center">
        <br />
        <br />
        <br />
        <p>Contact Us</p>
        <h2>Contact For Any Query</h2>
      </div>
      <div class="row align-items-center contact-information">
        <div class="col-md-6 col-lg-3">
          <div class="contact-info">
            <div class="contact-icon">
              <i class="fa fa-map-marker-alt"></i>
            </div>
            <div class="contact-text">
              <h3>Address</h3>
              <p>08 Nguyễn Hiền, Hoai Nhon</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="contact-info">
            <div class="contact-icon">
              <i class="fa fa-phone-alt"></i>
            </div>
            <div class="contact-text">
              <h3>Call Us</h3>
              <p>0377420495</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="contact-info">
            <div class="contact-icon">
              <i class="fa fa-envelope"></i>
            </div>
            <div class="contact-text">
              <h3>Email Us</h3>
              <p>nhi81924@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="contact-info">
            <div class="contact-icon">
              <i class="fa fa-share"></i>
            </div>
            <div class="contact-text">
              <h3>Follow Us</h3>
              <div class="contact-social">
                <a href=""><i class="fab fa-twitter"></i></a>
                <a href=""><i class="fab fa-facebook-f"></i></a>
                <a href=""><i class="fab fa-youtube"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
                <a href=""><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row contact-form">
        <div class="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3156.27692857188!2d109.03052367139027!3d14.478970326972815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sus!4v1731223079173!5m2!1sen!2sus"
            width="500"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="col-md-6">
          <div id="success"></div>
          <form name="sentMessage" id="contactForm" novalidate="novalidate">
            <div class="control-group">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Your Name"
                required="required"
                data-validation-required-message="Please enter your name"
              />
              <p class="help-block text-danger"></p>
            </div>
            <div class="control-group">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Your Email"
                required="required"
                data-validation-required-message="Please enter your email"
              />
              <p class="help-block text-danger"></p>
            </div>
            <div class="control-group">
              <input
                type="text"
                class="form-control"
                id="subject"
                placeholder="Subject"
                required="required"
                data-validation-required-message="Please enter a subject"
              />
              <p class="help-block text-danger"></p>
            </div>
            <div class="control-group">
              <textarea
                class="form-control"
                id="message"
                placeholder="Message"
                required="required"
                data-validation-required-message="Please enter your message"
              ></textarea>
              <p class="help-block text-danger"></p>
            </div>
            <div>
              <button
                class="btn custom-btn"
                type="submit"
                id="sendMessageButton"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Section Title -->
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
.post {
  padding-top: 60px; /* Tùy chỉnh khoảng cách này để phù hợp với chiều cao của navbar */
}
</style>
