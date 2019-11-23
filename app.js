var $$ = Dom7;

function mainInit(event, page) {
  /*=== Rpi3 photo browser ===*/
  var myPhotoBrowserDark = app.photoBrowser.create({
    photos: [
      '/static/images/rpi3b.png',
    ],
    theme: 'dark'
  });

  $$('.pb-show-rpi3b').on('click', function () {
    myPhotoBrowserDark.open();
  });
}

function pwmInit(event, page) {
  $$(".apply").on("click", function () {

    values = {
      "pin": $$("#pin").val(),
      "freq": $$("#freq").val(),
      "dutycycle": $$("#dutycycle").val()
    }

    Framework7.request.get('/set_pwm', values, function (data) {
      console.log(data);
    });    
  });
}

function servoInit(event, page) {
  $$(".apply").on("click", function () {

    values = {
      "pin": $$("#pin").val(),
      "angle": $$("#angle").val()
    }

    Framework7.request.get('/set_servo', values, function (data) {
      console.log(data);
    });    
  });
}

var servo2_state=0
function servo2Init(event, page) {
  $$(".apply").on("click", function () {

    if (servo2_state == 0) {
      selector = "#angle2";
      servo2_state = 1;
    } else {
      selector = "#angle1";
      servo2_state = 0;
    }

    values = {
      "pin": $$("#pin").val(),
      "angle": $$(selector).val()
    }

    Framework7.request.get('/set_servo', values, function (data) {
      console.log(data);
    });    
  });
}
var servo3_state=0
function servo3Init(event, page) {
  $$(".apply").on("click", function () {
    selector = ""
    newState = 0
    pin = ""

    switch(servo3_state) {
      case 0:
        selector = "#s1-angle2";
        newState = 1;
        pin = "#s1-pin";
        break;
      case 1:
        selector = "#s2-angle2";
        newState = 2;
        pin = "#s2-pin";
        break;
      case 2:
        selector = "#s2-angle1";
        newState = 3;
        pin = "#s2-pin";
        break;
      case 3:
        selector = "#s1-angle1";
        newState = 0;
        pin = "#s1-pin";
    }

    values = {
      "pin": $$(pin).val(),
      "angle": $$(selector).val()
    }

    servo3_state = newState;

    Framework7.request.get('/set_servo', values, function (data) {
      console.log(data);
    });    
  });
}

function gpioInit(event, page) {
  $$(".apply").on("click", function () {

    values = {
      "pin": $$("#pin").val(),
     // "direction": ($$("#dir").val() ? 1 : 0),
      "value": ($$("#val").prop("checked") ? 1 : 0)
    }

    Framework7.request.get('/set_gpio', values, function (data) {
      console.log(data);
    });    
  });
}

function stepperInit(event, page) {
  $$(".apply").on("click", function () {

    values = {
      "pin": $$("#pin").val(),
      "steps": $$("#steps").val(),
      "freq": $$("#freq").val()
    }

    Framework7.request.get('/set_stepper', values, function (data) {
      console.log(data);
    });    
  });
}

var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Umbra ink',
  // App id
  id: 'com.umbra.tester',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  touch: {
    // Enable fast clicks
    fastClicks: true,
  },
  theme: "md",
  // Add default routes
  routes: [
    {
      path: '/main/',
      url: 'index.html',
      on: {
        pageInit: mainInit
      }
    },
    {
      path: '/stepper/',
      url: 'stepper.html',
      on: {
        pageInit: stepperInit
      }
    },
    {
      path: '/pwm/',
      url: 'pwm.html',
      on: {
        pageInit: pwmInit
      }
    },
    {
      path: '/gpio/',
      url: 'gpio.html',
      on: {
        pageInit: gpioInit
      }
    },
    {
      path: '/servo/',
      url: 'servo.html',
      on: {
        pageInit: servoInit
      }
    },
    {
      path: '/servo2/',
      url: 'servo2.html',
      on: {
        pageInit: servo2Init
      }
    },
    {
      path: '/servo3/',
      url: 'servo3.html',
      on: {
        pageInit: servo3Init
      }
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');

mainInit()