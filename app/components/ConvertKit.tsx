import { useEffect } from 'react';

const ConvertKitForm = () => {
  useEffect(() => {
    // Load the ConvertKit script dynamically
    const script = document.createElement('script');
    script.src = "https://f.convertkit.com/ckjs/ck.5.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <form 
      action="https://app.kit.com/forms/7689472/subscriptions" 
      className="seva-form formkit-form" 
      method="post" 
      data-sv-form="7689472" 
      data-uid="6f95c73cb3" 
      data-format="inline" 
      data-version="5"
      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
      style={{minWidth: "400 500 600 700 800"}}
    >
      <div data-style="clean">
        <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
        <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
          <div className="formkit-field">
            <input 
              className="font-sans mt-4 p-2 w-full max-w-md rounded-md bg-gray-800 text-white placeholder-gray-500 formkit-input"
              name="email_address" 
              aria-label="Email Address" 
              placeholder="founder@company.xyz" 
              required 
              type="email" 
            />
          </div>
          <button 
            data-element="submit" 
            className="font-sans mt-4 px-4 py-2 bg-blue-500 text-white rounded-md formkit-submit"
          >
            <div className="formkit-spinner">
              <div></div><div></div><div></div>
            </div>
            <span>Tell me more!</span>
          </button>
        </div>
        <div className="formkit-powered-by-convertkit-container">
          <a 
            href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic" 
            data-element="powered-by" 
            className="formkit-powered-by-convertkit" 
            data-variant="dark" 
            target="_blank" 
            rel="nofollow"
          >
            Built with love!
          </a>
        </div>
      </div>
    </form>
  );
};

export default ConvertKitForm;