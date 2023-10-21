const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='section-container'>
        <h2 className='section-title'>Contact</h2>
        <p className='section-subtitle'>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>

        <div className='form-container'>
          <form method='POST'>
            <div className='input-container'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter your name'
                required
              />
            </div>
            {/* input-container */}

            <div className='input-container'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email'
                required
              />
            </div>
            {/* input-container */}

            <div className='input-container'>
              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                id='message'
                placeholder='Enter your message'
                required
              ></textarea>
            </div>
            {/* input-container */}

            <input type='submit' value='Submit' className='button' />
          </form>
          {/* form */}
        </div>
        {/* form-container */}
      </div>
      {/* section-container */}
    </section>
  );
};

export default Contact;
