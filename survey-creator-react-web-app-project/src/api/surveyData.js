export const json = {
    title: "Survey App Reactjs",
    pages: [
      {
        title: "Where and how did you hear about this site?",
        questions: [
          {
            type: "checkbox",
            name: "discovery",
            title: "Site discovery",
            hasOther: true,
            isRequired: false,
            choices: ["Github", "LinkedIn", "Twitter"]
          }
        ]
      },
      {
        title: "What programming languages are you currently learning/using?",
        questions: [
          {
            type: "checkbox",
            name: "langs",
            title: "Please select from the list given below",
            colCount: 4,
            isRequired: false,
            choices: [
              "Javascript",
              "Java",
              "Python",
              "CSS",
              "PHP",
              "Ruby",
              "C++",
              "C",
              "Shell",
              "C#",
              "Objective-C",
              "R",
              "VimL",
              "Go",
              "Perl",
              "CoffeeScript",
              "TeX",
              "Swift",
              "Scala",
              "Emacs Lisp",
              "Haskell",
              "Lua",
              "Clojure",
              "Matlab",
              "Arduino",
              "Makefile",
              "Groovy",
              "Puppet",
              "Rust",
              "PowerShell"
            ]
          }
        ]
      },
      {
        questions: [
          {
            type: "rating",
            name: "satisfaction",
            title: "How much would you rate your programming skills?",
            minRateDescription: "Complete Beginner",
            maxRateDescription: "Senior level developer / Experienced"
          }
        ]
      },
      {
        title: "Fill up your name and e-mail address",
        questions: [
          {
            type: "text",
            name: "name",
            title: "Name:"
          },
          {
            type: "text",
            name: "email",
            title: "Your e-mail"
          }
        ]
      },
      {
        questions: [
          {
            type: "comment",
            name: "suggestions",
            title: "Take some time and describe your programming journey?"
          }
        ]
      },
      {
        elements: [
          {
            type: "imagepicker",
            name: "choosepicture",
            title: "Which type of developer role are you currently pursuing?",
            choices: [
              {
                value: "SystemApplication",
                title: "System Application Developer",
                imageLink:
                  "https://lh3.googleusercontent.com/proxy/GCBI3szvM3Sx1IRikgwZeIc8l7-yY-Oo7ayjx5Nyaebb7dYjUP4x2mnwYRMV3wYQaIFhSO-MiWuWbR3jhHfY_HjWV4Qq6Udno8JpSV9L2_cJjXZV0kC39tyq4tWIfwHI2PVnJXV1r2-O8hRk14OTif0owyP04OsbgUUmFn4"
              },
              {
                value: "android",
                imageLink:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1200px-Android_robot.svg.png"
              },
              {
                value: "ios",
                imageLink:
                  "https://www.codenameone.com/img/blog/iOS.png"
              },
              {
                value: "webdeveloper",
                imageLink:
                  "https://www.x-cart.com/wp-content/uploads/2017/09/how-to-become-a-web-developer.png"
              },
              {
                value: "ComputerSystemEngineer",
                imageLink:
                  "https://i.ytimg.com/vi/-4kppHHHkqg/maxresdefault.jpg"
              },
              {
                value: "DBA",
                imageLink:
                  "https://cdn.lynda.com/course/385695/385695-637286176512851875-16x9.jpg"
              },
              {
                value: "QA",
                imageLink:
                  "https://miro.medium.com/max/4276/1*_hH7xOjymN-1iX1X0niOZQ.jpeg"
              },
              {
                value: "BI",
                imageLink:
                  "https://images.techhive.com/images/article/2016/02/bi-business-intelligence-ts-100646689-large.jpg"
              }
            ]
          }
        ]
      }
    ]
  };