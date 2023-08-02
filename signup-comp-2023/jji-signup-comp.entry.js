import { r as registerInstance, a as createEvent, h } from './index-e1e612ad.js';

const signupCompCss = ".form{position:fixed;width:25rem;font-family:sans-serif;height:31.25rem;text-align:center;background-color:black;margin-left:35%;margin-top:8%;border-radius:1rem;opacity:0.9;z-index:100;display:flex;flex-direction:column;justify-content:center;align-items:center}.form div{margin-bottom:1.2rem}.form a{color:#FDA50F;text-decoration:none}.form a:hover{text-decoration:underline}#signup{color:#FDA50F;font-family:sans-serif;font-size:2.8rem;margin-bottom:1.2rem}#n,#e,#p1,#p2{width:15.625rem;height:1.563rem;border-radius:0.625rem;text-align:center;font-family:sans-serif;font-size:1.2rem;background-color:rgb(229, 226, 226);border-color:whitesmoke;border-width:0.125rem;color:black;margin-bottom:1.2rem}.s{width:100%;height:0.5rem;border-radius:0.625rem;text-align:center;font-family:sans-serif;font-size:0.82rem;background-color:black;border-width:0.125rem;color:white;margin-bottom:1.2rem}#create{width:16rem;height:2.3rem;font-family:sans-serif;font-size:1.1rem;font-weight:bold;border-radius:0.8rem;background-color:black;border-color:#FDA50F;color:#FDA50F;opacity:0.8;margin-top:0.625rem;margin-top:1.2rem}::placeholder{color:#e1ad21;opacity:0.8}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background-color:rgba(0, 0, 0, 0.75);z-index:10;opacity:0;pointer-events:none;transition:opacity 0.3s ease-out}.backdrop.opened{opacity:1;pointer-events:all}.error{color:red;font-size:0.9rem;margin-top:0.7rem}";

const SignUpComp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formDataSubmitted = createEvent(this, "formDataSubmitted", 7);
    this.signInLinkClick = createEvent(this, "signInLinkClick", 7);
    this.titl = undefined;
    this.opened = undefined;
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.passwordsMatch = true;
    this.errorMessage = '';
    this.formSubmitted = false;
    this.initialPassword = '';
    this.showFormError = false;
  }
  onSignInLinkClick() {
    this.signInLinkClick.emit();
    console.log('Sign In Button');
  }
  //Method to open and close the sign-up form.
  async openSignUpComp() {
    console.log('Sign Up Is Open');
    this.opened = true;
    this.initialPassword = '';
    // Reset the error message state when the component is opened
    this.showFormError = false;
  }
  closeSignUpComp() {
    console.log('Sign Up Is Closed');
    this.opened = false;
  }
  //Watcher to monitor changes in the password and confirm password fields.
  //It checks if the passwords have been corrected and match again.
  handlePasswordChange(newValue) {
    //Check if the passwords have been corrected (not empty) and match again
    if (newValue !== '' && this.password === this.confirmPassword) {
      this.passwordsMatch = true;
    }
    else {
      this.passwordsMatch = false;
    }
  }
  handleCreateAccountClick(event) {
    // Check if the form has been submitted
    if (!this.formSubmitted) {
      // Show the error message when the "Create Account" button is clicked
      this.showFormError = true;
      // Check if any required fields are empty
      if (this.username === '' || this.email === '' || this.password === '' || this.confirmPassword === '') {
        // Prevent form submission if fields are empty
        event.preventDefault();
      }
      else {
        // If all required fields are filled, perform form submission
        this.handleSubmit(event);
      }
    }
  }
  //Method to handle form submission
  async handleSubmit(event) {
    event.preventDefault();
    //Check if passwords match
    if (this.password === this.confirmPassword) {
      //Set the initialPassword when the form is submitted for the first time
      if (this.initialPassword === '') {
        this.initialPassword = this.password;
      }
      this.passwordsMatch = true;
      //Fetch the API and send the form data
      const formData = {
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      console.log(formData);
      //Emit the form data through the custom event
      this.formDataSubmitted.emit(formData);
      // //Perform the API call or data storage logic here
      // try {
      //     const response = await fetch(`${FETCH_API}`, {
      //         method: 'POST',
      //         headers: {
      //             'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify(formData),
      //     });
      //     if (response.ok) {
      //         //Passwords match and the form data is submitted successfully
      //         //Redirect to the success page
      //         // window.location.href = '/success.html';
      //     } else {
      //         console.log(response);
      //     }
      // } catch (error) {
      //     console.error('Error submitting form:', error);
      // }
      // //Set formSubmitted to true after successful submission
      // this.formSubmitted = true;
    }
    else {
      //Passwords don't match, show an error message or take appropriate action
      this.passwordsMatch = false;
      // Do not submit the form until all fields are filled correctly
      this.formSubmitted = false;
    }
  }
  //Render method to generate the component's HTML
  render() {
    let mainContent = null;
    if (this.opened) {
      mainContent = [
        //HTML code for backdrop and form
        h("div", { class: "backdrop opened", onClick: this.closeSignUpComp.bind(this) }),
        h("div", null, h("form", { class: "form" }, h("div", null, h("h1", { class: "signup-title", id: "signup" }, this.titl)), h("div", null, h("input", { id: "n", type: "text", placeholder: "Username", title: "username", value: this.username, onChange: (event) => this.username = event.target.value })), h("div", null, h("input", { id: "e", type: "email", placeholder: "Something@hotmail.com", title: "email", value: this.email, onChange: (event) => this.email = event.target.value })), h("input", { id: "p1", type: "password", placeholder: "Password", title: "password", required: true, value: this.password, onInput: (event) => (this.password = event.target.value) }), h("input", { id: "p2", type: "password", placeholder: "Confirm Password", title: "confirm password", required: true, value: this.confirmPassword, onInput: (event) => (this.confirmPassword = event.target.value) }), h("div", null, this.showFormError && !this.formSubmitted && (this.username === '' || this.email === '' || this.password === '' || this.confirmPassword === '') && (h("div", null, h("span", { id: "error-message", class: "error" }, "Please Fill All Required Fields."))), this.passwordsMatch ? [
          h("div", null, h("button", { id: "create", class: "n", onClick: (event) => this.handleCreateAccountClick(event) }, "Create Account")),
          h("div", null, h("span", { id: "sign-in-take", class: "s" }, "Already Have An Account?", h("a", { onClick: this.onSignInLinkClick.bind(this) }, "Sign In")))
        ] : (h("div", null, h("span", { id: "error-message", class: "error" }, "Passwords Do Not Match. Please Try Again."))))))
      ];
    }
    return (h("div", { id: "signup-comp" }, mainContent));
  }
  static get watchers() { return {
    "password": ["handlePasswordChange"],
    "confirmPassword": ["handlePasswordChange"]
  }; }
};
SignUpComp.style = signupCompCss;

export { SignUpComp as jji_signup_comp };

//# sourceMappingURL=jji-signup-comp.entry.js.map