
 //For Swiper sectoin gaalerey
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  //// for only give nav when press on like or deslike 

  const likeButtons = document.querySelectorAll('.like-button');
  const dislikeButtons = document.querySelectorAll('.dislike-button');

  likeButtons.forEach(button => {
      button.addEventListener('click', function() {
          const photoTitle = this.closest('.details').querySelector('h3').innerText;
          alert(`You liked "${photoTitle}"`);
          sendLike(photoTitle);
      });
  });


  dislikeButtons.forEach(button => {
      button.addEventListener('click', function() {
          const photoTitle = this.closest('.details').querySelector('h3').innerText;
          alert(`You disliked "${photoTitle}"`);
          sendDesLike(photoTitle);
         
      });
  });

/// give nav in email for like or deslie and message Chake All

function sendMessegeForPhtot(messagee,Titel) {
  
    let bodymessage = `Message:<br><br><hr> ${messagee} <br><hr>`;
    console.log('Sending email:', bodymessage); 
    Email.send({
      SecureToken :'5bf9c48f-a4e2-4709-a068-0d2c43ae01d6',
      To : 'aouachsalma3@gmail.com',
      From : "aouachsalma3@gmail.com",
        Subject: `تعليق جديد على صورتك ${Titel}`,
        Body: bodymessage
    }).then(
        message => {
          if(message=="OK"){
            Swal.fire({
              title: "Success!",
              text: `Thank you for sending this message!`,
              icon: "success"
            });
          }
          else(
            document.console("NOOOOOO")
          )
        }
    );
}

function sendLike(Titel) {
  
  let bodymessage =``;
  console.log('Sending email:', bodymessage); 
  Email.send({
    SecureToken :'5bf9c48f-a4e2-4709-a068-0d2c43ae01d6',
    To : 'aouachsalma3@gmail.com',
    From : "aouachsalma3@gmail.com",
    Subject: `حصلت على اعجاب شخص ما ${Titel}`,
      Body: bodymessage
  }).then(
      message => {
        if(message=="OK"){
        
        }
        else(
          document.console("NOOOOOO")
        )
      }
  );
}


function sendDesLike(Titel) {
  
  let bodymessage = ``;
  console.log('Sending email:', bodymessage); 
  Email.send({
    SecureToken :'5bf9c48f-a4e2-4709-a068-0d2c43ae01d6',
    To : 'aouachsalma3@gmail.com',
    From : "aouachsalma3@gmail.com",
      Subject: `حصلت على عدم اعجاب شخص ما ${Titel}`,
      Body: bodymessage
  }).then(
      message => {
        if(message=="OK"){
     
        }
        else(
          document.console("NOOOOOO")
        )
      }
  );
}


const forms2 = document.querySelectorAll('.form2');
forms2.forEach(form => {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const messagee = this.closest('.form2').querySelector('input').value;
        const PhotoTitel = this.closest('.details').querySelector('h3').textContent;
        sendMessegeForPhtot(messagee,PhotoTitel);
    });
});






////NEw 

//emails contact Cheak


function sendEmail() {
    let name = document.getElementById('name').value;
    let message = document.getElementById('messege').value;

    let bodymessage = `Name: ${name}<br> <br> Message: ${message} <br>`;
    console.log('Sending email:', bodymessage); 
    Email.send({
      SecureToken :'5bf9c48f-a4e2-4709-a068-0d2c43ae01d6',
      To : 'aouachsalma3@gmail.com',
      From : "aouachsalma3@gmail.com",
        Subject: 'This email for contact',
        Body: bodymessage
    }).then(
        message => {
          if(message=="OK"){
            Swal.fire({
              title: "Success!",
              text: `Thank you ${name} for sending this message!`,
              icon: "success"
            });
          }
          else(
            document.console("NOOOOOO")
          )
        }
    );
}




//For Articel Show


//for open messege Chaek ALl

document.addEventListener('DOMContentLoaded', function() {
  const messageButtons = document.querySelectorAll('.openarticelmessege');
  
  messageButtons.forEach(button => {
      button.addEventListener('click', function() {
          const messageForm = this.parentElement.nextElementSibling;
          
          if (messageForm) {
              messageForm.style.display = (messageForm.style.display === 'block') ? 'none' : 'block';
          }
      });
  });
});
//for like or deslike and send notifactions Cheak ALL

const likeBtn = document.querySelectorAll('.like');
const dislikeBtn = document.querySelectorAll('.deslike');

likeBtn.forEach(button => {
  button.addEventListener('click', function() {
      const ArticelTitel = this.closest('.container2').querySelector('h1').innerText;
      alert(`You liked "${ArticelTitel}"`);
      sendLike(ArticelTitel);
  });
});
dislikeBtn.forEach(button => {
  button.addEventListener('click', function() {
      const ArticelTitel = this.closest('.container2').querySelector('h1').innerText;
      alert(`You Desliked "${ArticelTitel}"`);
      sendDesLike(ArticelTitel);
  });
});



function sendMessegeForArticle(messagee,ArticelTitel) {

  let bodymessage = `Titel : ${ ArticelTitel}  Message:<br><br> ${messagee} `;
  console.log('Sending email:', bodymessage); 
  Email.send({
    SecureToken :'5bf9c48f-a4e2-4709-a068-0d2c43ae01d6',
    To : 'aouachsalma3@gmail.com',
    From : "aouachsalma3@gmail.com",
      Subject: `حصلت  تعليق جديد على هذه الكتابة${ArticelTitel} `,
      Body: bodymessage
  }).then(
      message => {
        if(message=="OK"){
          Swal.fire({
            title: "Success!",
            text: `Thank you for sending this message!`,
            icon: "success"
          });
          console.log(`This Message ${bodymessage}`)
        }
        else(
          document.console("NOOOOOO")
        )
      }
  );
}


const forms3 = document.querySelectorAll('.form3');
forms3.forEach(form => {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const messagee = this.closest('.form3').querySelector('textarea').value;
        const ArticelTitel = this.closest('.container2').querySelector('h1').textContent;
        sendMessegeForArticle(messagee,ArticelTitel);
    });
});


//landing

$(document).ready(function(){

  
  $("button").click(function(){
    var target = $(this).attr("href");
    $(".content").not(target).hide();
    $(target).show("slow");
  });
  
  var cw = $('.project').width();
  $('.project').css({'height':cw+'px'});
  
  $("#first").click();
  
});


//For Contact 


$(document).ready(function() {
  $('.contact').click(function (e) {
      $('.card').toggleClass('active');
      $('.banner').toggleClass('active');
      $('.photo').toggleClass('active');
      $('.social-media-banner').toggleClass('active');
      $('.email-form').toggleClass('active');  
      var buttonText = $('#main-button').text(); // Corrected selector here
      if (buttonText === 'الرجوع') {
          buttonText = 'اضغط هنا للتواصل';
          $('#main-button').text(buttonText); 
        
        // Corrected selector here
      } else {
          buttonText = 'الرجوع';
          $('#main-button').text(buttonText); // Corrected selector here
      }
  });
});

