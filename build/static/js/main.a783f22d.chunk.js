(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{121:function(e,t,s){"use strict";s.r(t);var c=s(2),l=s.n(c),n=s(39),r=s.n(n),i=(s(48),s(7)),a=s(5),j=s(11),x=s.n(j),o=s(13),d=s(10),b=s(1),m=function(e){var t=e.text;return t||(t="Press Me"),Object(b.jsx)("button",{className:"btn py-2 px-4 my-1 rounded-lg border border-purple-700 shadow-lg font-medium bg-gray-100 text-purple-700 hover:bg-purple-700 hover:text-white hover:border-gray-300",onClick:function(){return window.scrollTo(0,0)},children:t})},h=s.p+"static/media/hong_kong.36058044.jpg",u=s(40),O=s.n(u)()({projectId:"z6lcwpv2",dataset:"production"}),p=function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),s=t[0],l=t[1],n=null;return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.fetch('*[_type == "author"]{\n          bio\n        }');case 2:t=e.sent,l(t[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),s&&(n=s.bio.split("\n")),Object(b.jsxs)("main",{className:"home-page flex-grow bg-gray-500 text-white text-center p-2 flex flex-col justify-center items-center",children:[Object(b.jsx)("h3",{className:"text-4xl font-bold cursive text-yellow-600 sm:text-6xl",children:"HOME"}),Object(b.jsxs)("section",{className:"home-item about-me",children:[Object(b.jsx)("h2",{className:"text-secondary text-3xl font-semibold my-3",children:"About Me"}),Object(b.jsxs)("div",{className:"max-w-5xl mx-auto md:flex items-center",children:[Object(b.jsx)("div",{children:s&&n.map((function(e){return Object(b.jsx)("p",{className:"p-2 md:flex-1",children:e})}))}),Object(b.jsx)("img",{src:h,alt:"about me",className:"reference-img w-3/4 mx-auto md:flex-1 md:w-1/2"})]})]}),Object(b.jsx)("section",{className:"home-item casual"}),Object(b.jsxs)("div",{className:"max-w-5xl mx-auto md:inline-flex",children:[Object(b.jsxs)("section",{className:"home-item intro-education w-full flex flex-col justify-between items-center md:flex-1",children:[Object(b.jsx)("h2",{className:"text-secondary text-3xl font-semibold my-3",children:"Education"}),Object(b.jsx)("p",{className:"px-2",children:"I graduated from HKUST with a Bachelor's degree in Electronic Engineering. Outside of school, I have taken different courses online about software development. Check out the education page to learn more about that."}),Object(b.jsx)(i.b,{to:"/education",children:Object(b.jsx)(m,{text:"Learn More"})})]}),Object(b.jsxs)("section",{className:"home-item intro-projectn w-full flex flex-col justify-between items-center  md:flex-1",children:[Object(b.jsx)("h2",{className:"text-secondary text-3xl font-semibold my-3",children:"Project"}),Object(b.jsx)("p",{className:"px-2",children:"Check out the project page for projects I have completed."}),Object(b.jsx)(i.b,{to:"/project",children:Object(b.jsx)(m,{text:"Learn More"})})]})]})]})},f=s(4),g=s(20),v=s(42),y=function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),s=t[0],l=t[1],n=null;return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.fetch('*[_type == "author"]{\n        selfLearn\n      }');case 2:t=e.sent,l(t[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),s?(n=s.selfLearn.split("\n"),Object(b.jsx)("main",{className:"education-page flex-grow bg-gray-500 text-white p-2",children:Object(b.jsxs)("div",{className:"max-w-5xl mx-auto",children:[Object(b.jsx)("h3",{className:"text-4xl font-bold cursive text-center text-yellow-600 sm:text-6xl",children:"EDUCATION"}),Object(b.jsxs)("section",{className:"education-items",children:[Object(b.jsxs)("div",{className:"university p-1 text-center",children:[Object(b.jsx)("h2",{className:"text-secondary text-3xl font-semibold my-3 md:text-left",children:"Formal Education"}),Object(b.jsx)("h3",{className:"text-secondary text-xl font-medium",children:"Bachelor of Electronic Engineering"}),Object(b.jsxs)("p",{children:[Object(b.jsx)(f.k,{className:"inline text-xl"})," Hong Kong University of Science and Technology, HK"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)(f.c,{className:"inline text-xl"})," 09/2016 - 06/2021"]})]}),Object(b.jsx)("hr",{className:"my-2 mx-2"}),Object(b.jsxs)("div",{className:"self-learn p-1",children:[Object(b.jsx)("h2",{className:"text-secondary text-3xl font-semibold text-center my-3 md:text-left",children:"Self-learn"}),Object(b.jsx)("div",{className:"self-learn-intro mb-4 md:inline-flex md:space-x-4",children:n&&n.map((function(e){return Object(b.jsx)("p",{className:"flex-1 pb-1",children:e})}))}),Object(b.jsxs)("div",{className:"w-full text-center space-y-3 md:inline-flex md:justify-evenly md:items-start md:space-x-3 md:space-y-0",children:[Object(b.jsxs)("div",{className:"skillsets flex-1 border-2 border-dotted rounded-3xl pb-2",children:[Object(b.jsx)("h3",{className:"text-secondary text-xl font-semibold underline mb-2 md:text-2xl",children:"Languages/Frameworks"}),Object(b.jsxs)("ul",{className:"skills",children:[Object(b.jsxs)("li",{children:[Object(b.jsx)(f.i,{className:"inline text-xl"})," HTML"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(f.d,{className:"inline  text-xl"})," CSS"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(f.n,{className:"inline  text-xl"})," Sass"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(f.b,{className:"inline  text-xl"})," Bootstrap"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(g.b,{className:"inline text-xl"})," JavaScript"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(f.m,{className:"inline text-xl"})," Python"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(g.a,{className:"inline text-xl"})," C++"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(f.l,{className:"inline text-xl"})," PHP"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(f.e,{className:"inline text-xl"})," SQL"]})]})]}),Object(b.jsxs)("div",{className:"skillsets flex-1 border-2 border-dotted rounded-3xl pb-2",children:[Object(b.jsx)("h3",{className:"text-secondary text-xl underline font-semibold mb-2 md:text-2xl",children:"Tools/Skills"}),Object(b.jsxs)("ul",{className:"skills",children:[Object(b.jsxs)("li",{children:[Object(b.jsx)(f.g,{className:"inline text-xl"})," Git"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(f.a,{className:"inline text-xl"})," Bitbucket"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(f.h,{className:"inline text-xl"})," Github"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(g.c,{className:"inline text-xl"}),"jQuery"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(v.a,{className:"inline text-xl"})," MySQL"]}),Object(b.jsx)("li",{children:"SQLite"}),Object(b.jsx)("li",{children:"XML & JSON"}),Object(b.jsx)("li",{children:"Responsive Design"}),Object(b.jsx)("li",{children:"API"})]})]})]}),Object(b.jsxs)("div",{className:"self-learn-courses",children:[Object(b.jsx)("h3",{className:"text-secondary text-xl text-center font-semibold my-3 md:text-2xl md:text-left",children:"Courses Completed on Online Platforms"}),Object(b.jsx)("p",{className:"text-yellow-300",children:"* Full list of completed courses available in LinkedIn profile."}),Object(b.jsx)("table",{className:"table mx-auto rounded-xl",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{className:"bg-purple-600",children:[Object(b.jsx)("th",{children:"Course Name"}),Object(b.jsx)("th",{children:"Provider"}),Object(b.jsx)("th",{children:"Related Skills"})]}),Object(b.jsx)("tr",{children:Object(b.jsx)("th",{colSpan:"3",className:"specialization bg-purple-400",children:"Web Design for Everybody"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Introduction to HTML5"}),Object(b.jsx)("td",{rowSpan:"5",className:"text-center",children:"University of Michigan"}),Object(b.jsx)("td",{children:"HTML5"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Introduction to CSS3"}),Object(b.jsx)("td",{children:"CSS3"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Interactivity with JavaScript"}),Object(b.jsx)("td",{children:"JavaScript"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Advances Styling with Responsive Design"}),Object(b.jsxs)("td",{children:["Bootstrap",Object(b.jsx)("br",{}),"Responsive Design"]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Web Design for Everybody Capstone"}),Object(b.jsx)("td",{})]}),Object(b.jsx)("tr",{children:Object(b.jsx)("th",{colSpan:"3",className:"specialization bg-purple-400",children:"Web Applications for Everybody"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Building Web Applications in PHP"}),Object(b.jsx)("td",{rowSpan:"4",className:"text-center",children:"University of Michigan"}),Object(b.jsxs)("td",{children:["HTML5",Object(b.jsx)("br",{}),"CSS3",Object(b.jsx)("br",{}),"PHP"]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Introduction to Structured Query Language (SQL)"}),Object(b.jsxs)("td",{children:["SQL",Object(b.jsx)("br",{}),"MySQL"]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Building Database Applications in PHP"}),Object(b.jsxs)("td",{children:["PHP",Object(b.jsx)("br",{}),"MySQL"]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"JavaScript, jQuery, and JSON"}),Object(b.jsxs)("td",{children:["JavaScript",Object(b.jsx)("br",{}),"jQuery",Object(b.jsx)("br",{}),"JSON"]})]}),Object(b.jsx)("tr",{children:Object(b.jsx)("th",{colSpan:"3",className:"specialization bg-purple-400",children:"Python for Everybody"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Programming for Everybody (Getting Started with Python)"}),Object(b.jsx)("td",{rowSpan:"5",className:"text-center",children:"University of Michigan"}),Object(b.jsx)("td",{rowSpan:"2",children:"Python"})]}),Object(b.jsx)("tr",{children:Object(b.jsx)("td",{children:"Python Data Structures"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Using Python to Access Web Data"}),Object(b.jsxs)("td",{children:["XML",Object(b.jsx)("br",{}),"JSON"]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Using Databases with Python"}),Object(b.jsx)("td",{children:"SQLite"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Capstone: Retrieving, Processing, and Visualizing Data with Python"}),Object(b.jsx)("td",{})]})]})})]})]})]})]})})):Object(b.jsx)("div",{className:"flex-grow bg-gray-500 text-white text-2xl text-center",children:"Loading..."})},N=function(e){var t=e.githubLink,s=e.viewLink,c=e.description;return c||(c="Project"),Object(b.jsxs)("div",{className:"absolute bottom-0 h-full w-full flex flex-col justify-evenly items-center text-transparent hover:bg-gray-200 hover:opacity-80 hover:text-purple-700",children:[Object(b.jsx)("p",{className:"text-2xl font-semibold px-2",children:c}),Object(b.jsxs)("div",{className:"w-full flex justify-evenly items-center",children:[Object(b.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",className:"text-6xl hover:text-yellow-700 m-3",children:Object(b.jsx)(f.h,{className:"inline"})}),Object(b.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:"text-6xl hover:text-yellow-700 m-3",children:Object(b.jsx)(f.f,{className:"inline"})})]})]})},w=function(e){var t=e.slug,s=Object(c.useState)(null),l=Object(d.a)(s,2),n=l[0],r=l[1];return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(x.a.mark((function e(){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.fetch('*[_type == "project" && slug.current == "'.concat(t,'"]{\n            title,\n            date,\n            place,\n            description,\n            mainImage{\n              asset->{\n                _id,\n                url\n              },\n              alt\n            },\n            link,\n            githubLink\n          }'));case 2:s=e.sent,r(s[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),n?Object(b.jsxs)("div",{className:"project-item m-2 relative sm:m-3 lg:m-4",children:[Object(b.jsx)("img",{src:n.mainImage.asset.url,alt:"",className:"max-w-lg w-full mx-auto "}),Object(b.jsx)(N,{githubLink:n.githubLink,viewLink:n.link,description:n.description})]}):Object(b.jsx)(b.Fragment,{})},S=function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),s=t[0],l=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.fetch('*[_type == "project"]{\n          slug\n        }');case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),s?Object(b.jsxs)("main",{className:"home-page flex-grow bg-gray-500 text-center p-2 flex flex-col justify-center items-center",children:[Object(b.jsx)("h3",{className:"text-4xl font-bold cursive text-yellow-600 mb-4 sm:text-6xl",children:"PROJECT"}),Object(b.jsx)("div",{className:"projects-list max-w-7xl px-4 mx-auto grid sm:grid-cols-2 lg:grid-cols-3",children:s&&s.map((function(e,t){return Object(b.jsx)(w,{slug:e.slug.current},t)}))})]}):Object(b.jsx)("div",{className:"flex-grow bg-gray-500 text-white text-2xl text-center",children:"Loading..."})},k=s(43),P=s.n(k),L=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),s=t[0],l=t[1],n=Object(c.useState)(""),r=Object(d.a)(n,2),i=r[0],a=r[1],j=Object(c.useState)(""),x=Object(d.a)(j,2),o=x[0],m=x[1];return Object(b.jsx)("div",{className:"email-form",children:Object(b.jsxs)("form",{className:"send-email text-purple-700",onSubmit:function(e){e.preventDefault(),s?i?o?(P.a.sendForm("service_96h4nxe","template_sa4whz9",e.target,"user_Vlc3MZb3VjmdaXwvHCdfn").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),l(""),a(""),m("")):alert("Message field is empty!"):alert("Please tell me your email"):alert("Please tell me your name")},children:[Object(b.jsxs)("div",{className:"form-control mb-2",children:[Object(b.jsx)("label",{className:"mr-2",children:"Name:"}),Object(b.jsx)("input",{type:"text",name:"user_name",placeholder:"Your Full Name",value:s,onChange:function(e){return l(e.target.value)},className:"text-gray-700 rounded-md border border-solid border-purple-700"})]}),Object(b.jsxs)("div",{className:"form-control mb-2",children:[Object(b.jsx)("label",{className:"mr-2",children:"Email:"}),Object(b.jsx)("input",{type:"email",name:"user_email",placeholder:"Your Email Address",value:i,onChange:function(e){return a(e.target.value)},className:"text-gray-700 rounded-md border border-solid border-purple-700"})]}),Object(b.jsx)("div",{className:"form-control h-40 mb-2",children:Object(b.jsx)("textarea",{name:"message",placeholder:"Your Message",value:o,onChange:function(e){return m(e.target.value)},className:"w-full h-full text-gray-700 rounded-lg border border-solid border-purple-700"})}),Object(b.jsx)("input",{type:"submit",value:"Send Email",className:"btn py-2 px-4 my-1 rounded-lg border border-purple-700 shadow-lg font-medium bg-gray-100 text-purple-700 hover:bg-purple-700 hover:text-white hover:border-gray-300"})]})})},C=function(){return Object(b.jsxs)("main",{className:"home-page flex-grow bg-purple-200 text-purple-700 text-center p-2 flex flex-col justify-center items-center",children:[Object(b.jsx)("h3",{className:"text-4xl font-bold cursive text-yellow-600 mb-4 sm:text-6xl",children:"CONTACT"}),Object(b.jsxs)("section",{className:"contact-main max-w-3xl w-full h-full flex flex-col justify-evenly items-center mx-auto lg:flex-row",children:[Object(b.jsxs)("div",{className:"contact-info mb-4",children:[Object(b.jsxs)("div",{className:"sns inline-flex text-4xl space-x-4",children:[Object(b.jsx)("a",{href:"https://github.com/krissolui",target:"_blank",rel:"noreferrer",className:"btn sns-btn",children:Object(b.jsx)(f.h,{className:"hover:text-yellow-600"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/siu-on-lui-8b8888159/",target:"_blank",rel:"noreferrer",className:"btn sns-btn",children:Object(b.jsx)(f.j,{className:"hover:text-yellow-600"})})]}),Object(b.jsx)("p",{className:"fullname text-5xl cursive font-semibold my-3",children:"Kris Lui"}),Object(b.jsx)("p",{children:"Email: krissolui@gmail.com"}),Object(b.jsx)("p",{children:"Phone: +(852)6088 9331"})]}),Object(b.jsx)(L,{})]})]})},E=function(){return Object(b.jsxs)("nav",{className:"nav main-nav max-w-screen-sm text-lg font-bold text-white text-center  md:text-2xl",children:[Object(b.jsx)(i.c,{to:"/",exact:!0,className:"nav-item py-1 px-2.5 rounded-md hover:text-yellow-600 flex-1",activeClassName:"text-yellow-600 bg-purple-300",children:"Home"}),Object(b.jsx)(i.c,{to:"/education",className:"nav-item py-1 px-2.5 rounded-md hover:text-yellow-600 flex-1",activeClassName:"text-yellow-600 bg-purple-300",children:"Education"}),Object(b.jsx)(i.c,{to:"/project",className:"nav-item py-1 px-2.5 rounded-md hover:text-yellow-600 flex-1",activeClassName:"text-yellow-600 bg-purple-300",children:"Project"}),Object(b.jsx)(i.c,{to:"/contact",className:"nav-item py-1 px-2.5 rounded-md hover:text-yellow-600 flex-1",activeClassName:"text-yellow-600 bg-purple-300",children:"Contact"})]})},M=function(){return Object(b.jsxs)("header",{className:"bg-purple-700 py-6 text-center flex flex-col items-center md:flex-row md:justify-between md:pl-6 md:pr-4",children:[Object(b.jsxs)("h1",{className:"text-2xl text-white font-bold mb-2 md:mb-0 md:text-3xl",children:[Object(b.jsx)(i.c,{to:"/",exact:!0,className:"mr-3 cursive text-5xl text-yellow-600 md:text-7xl",children:"Kris"}),"Portfolio"]}),Object(b.jsx)(E,{})]})},_=s.p+"static/media/owl.a4691bc6.png",H=function(){return Object(b.jsxs)("footer",{className:"bg-purple-700 pt-4 pb-2 text-white text-center flex-col justify-center items-center",children:[Object(b.jsxs)("div",{className:"max-w-screen-md mx-auto flex flex-col items-center md:flex-row md:justify-evenly",children:[Object(b.jsx)("div",{className:"logo w-32 mx-auto md:mx-0",children:Object(b.jsx)(i.b,{to:"/",exact:"true",onClick:function(){return window.scrollTo(0,0)},children:Object(b.jsx)("img",{src:_,alt:"Owl by Ben Davis from the Noun Project",className:"logo-img"})})}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"sns inline-flex text-3xl space-x-3",children:[Object(b.jsx)("a",{href:"https://github.com/krissolui",target:"_blank",rel:"noreferrer",className:"btn sns-btn hover:text-yellow-600",children:Object(b.jsx)(f.h,{})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/siu-on-lui-8b8888159/",target:"_blank",rel:"noreferrer",className:"btn sns-btn hover:text-yellow-600",children:Object(b.jsx)(f.j,{})})]}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("p",{children:"Email: krissolui@gmail.com"}),Object(b.jsx)("p",{children:"Phone: +(852)6088 9331"})]})]})]}),Object(b.jsx)("hr",{className:"my-1 mx-2"}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("p",{children:"Copyright \xa9 2021."})})]})};var I=function(){return Object(b.jsx)("div",{className:"min-h-screen flex flex-col justify-between",children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(M,{}),Object(b.jsxs)(a.c,{children:[Object(b.jsx)(a.a,{path:"/",exact:!0,component:p}),Object(b.jsx)(a.a,{path:"/education",component:y}),Object(b.jsx)(a.a,{path:"/project",component:S}),Object(b.jsx)(a.a,{path:"/contact",component:C})]}),Object(b.jsx)(H,{})]})})},T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,122)).then((function(t){var s=t.getCLS,c=t.getFID,l=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),l(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),T()},48:function(e,t,s){}},[[121,1,2]]]);
//# sourceMappingURL=main.a783f22d.chunk.js.map