import{r as i,c as t,h as s}from"./p-55b14084.js";const e="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktZWFyLWZpbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTguNSAwQTUuNSA1LjUgMCAwIDAgMyA1LjV2Ny4wNDdhMy40NTMgMy40NTMgMCAwIDAgNi42ODcgMS4yMTJsLjUxLTEuMzYzYTQuNTkgNC41OSAwIDAgMSAuNjctMS4xOTdsMi4wMDgtMi41ODFBNS4zNCA1LjM0IDAgMCAwIDguNjYgMEg4LjVaTTcgNS41djIuNjk1Yy4xMTItLjA2LjIyMy0uMTIzLjMzMi0uMTkyLjMyNy0uMjA4LjU3Ny0uNDQuNzItLjcyN2EuNS41IDAgMSAxIC44OTUuNDQ4Yy0uMjU2LjUxMy0uNjczLjg2NS0xLjA3OSAxLjEyM0E4LjUzOCA4LjUzOCAwIDAgMSA3IDkuMzEzVjExLjVhLjUuNSAwIDAgMS0xIDB2LTZhMi41IDIuNSAwIDAgMSA1IDBWNmEuNS41IDAgMCAxLTEgMHYtLjVhMS41IDEuNSAwIDEgMC0zIDBaIi8+Cjwvc3ZnPg==";const o="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktZXllLXNsYXNoLWZpbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0ibTEwLjc5IDEyLjkxMi0xLjYxNC0xLjYxNWEzLjUgMy41IDAgMCAxLTQuNDc0LTQuNDc0bC0yLjA2LTIuMDZDLjkzOCA2LjI3OCAwIDggMCA4czMgNS41IDggNS41YTcuMDI5IDcuMDI5IDAgMCAwIDIuNzktLjU4OHpNNS4yMSAzLjA4OEE3LjAyOCA3LjAyOCAwIDAgMSA4IDIuNWM1IDAgOCA1LjUgOCA1LjVzLS45MzkgMS43MjEtMi42NDEgMy4yMzhsLTIuMDYyLTIuMDYyYTMuNSAzLjUgMCAwIDAtNC40NzQtNC40NzRMNS4yMSAzLjA4OXoiLz4KICA8cGF0aCBkPSJNNS41MjUgNy42NDZhMi41IDIuNSAwIDAgMCAyLjgyOSAyLjgyOWwtMi44My0yLjgyOXptNC45NS43MDgtMi44MjktMi44M2EyLjUgMi41IDAgMCAxIDIuODI5IDIuODI5em0zLjE3MSA2LTEyLTEyIC43MDgtLjcwOCAxMiAxMi0uNzA4LjcwOHoiLz4KPC9zdmc+";const r=".login-btn{width:100%;padding:0.5rem 0;border:none;background-color:blue;color:white;margin:1rem 0;border-radius:5px}.login-btn:hover{background-color:#0d6efd}.form-input-material{--input-default-border-color:#000;--input-border-bottom-color:#000;width:100%}.username{width:100%}.login-form{display:flex;flex-direction:column;align-items:center;padding:3rem 2rem;color:#000;background-color:white;border-radius:10px;box-shadow:0 0 15px rgba(0, 0, 0, 0.109);font-family:sans-serif;width:20rem;max-width:95%}.login-form h1{margin:0 0 24px 0}.login-form .form-input-material{margin:12px 0;display:flex}.form-input-material input{flex:1}.login-form .btn{width:100%;margin:18px 0 9px 0}.anchor{color:blue}.anchor:hover{text-decoration:underline}.icon{background:transparent;border:none}";const a=class{constructor(s){i(this,s);this.loginEvent=t(this,"loginEvent",7);this.register=t(this,"register",7);this.eyeIcon=atob(e.split(",")[1]);this.eyeSlashIcon=atob(o.split(",")[1]);this.showPass=false;this.usernameInputValid=undefined;this.passwordInputValid=undefined;this.Login={username:"",password:""}}ToggleShowPass(){this.showPass=!this.showPass}onLogin(i){i.preventDefault();this.loginEvent.emit(this.Login);this.Login={username:"",password:""}}onRegister(){console.log("register");this.register.emit()}onUsernameInput(i){this.Login.username=i.target.value;if(this.Login.username.trim()!==""){this.usernameInputValid=true}else{this.usernameInputValid=false}}onPasswordInput(i){this.Login.password=i.target.value;if(this.Login.password.trim()!==""){this.passwordInputValid=true}else{this.passwordInputValid=false}}render(){let i="password";let t=this.eyeIcon;if(this.showPass){i="text";t=this.eyeSlashIcon}return[s("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/alphardex/aqua.css@master/dist/aqua.min.css"}),s("form",{onSubmit:this.onLogin.bind(this),class:"login-form"},s("h1",null,"Login"),s("span",{class:"jimmy"},"XYZ"),s("div",{class:"form-input-material"},s("input",{type:"text",name:"username",id:"username",placeholder:" ",autocomplete:"off",ref:i=>this.userInput=i,value:this.Login.username,onInput:this.onUsernameInput.bind(this),class:"form-control-material username",required:true}),s("label",{htmlFor:"username"},"Username")),s("div",{class:"form-input-material"},s("input",{type:i,name:"password",id:"password",placeholder:"",autocomplete:"off",class:"form-control-material",ref:i=>this.passInput=i,value:this.Login.password,onInput:this.onPasswordInput.bind(this),required:true}),s("a",{class:"icon",onClick:this.ToggleShowPass.bind(this)},s("span",{innerHTML:t})),s("label",{htmlFor:"password"},"Password")),s("a",{class:"anchor"},"Forget Passowrd"),s("button",{type:"submit",class:"login-btn"},"Login"),s("a",{class:"anchor",onClick:this.onRegister.bind(this)},"Create Account"))]}};a.style=r;export{a as at_login};
//# sourceMappingURL=p-5be5a611.entry.js.map