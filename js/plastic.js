'use strict';
$(document).ready(function () {
  /* объявляем общие переменные */
  var popupCallback = document.getElementsByClassName('popup-callback');
  var popupCallbackCloseBtn = document.getElementsByClassName('popup-callback__close-btn');

  var popupSuccess = document.getElementsByClassName('popup-success');
  var popupSuccessCloseBtn = document.getElementsByClassName('popup-success__close-btn');

  var overlay = document.getElementsByClassName('overlay');

  var popupCallbackInputPhone = document.getElementById('popup-callback-input-phone');

  var orderInputName = document.getElementById('order-input-name');
  var orderInputPhone = document.getElementById('order-input-phone');

  var toughInputName = document.getElementById('tough-input-name');
  var toughInputPhone = document.getElementById('tough-input-phone');
  /* */
  /*Плавный скролл*/
  $(function () {
    $('a[href^="#"]').on('click', function (event) {
      // отменяем стандартное действие
      event.preventDefault();

      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      /*
       * sc - в переменную заносим информацию о том, к какому блоку надо перейти
       * dn - определяем положение блока на странице
       */

      $('html, body').animate({
        scrollTop: dn
      }, 1000);

      /*
       * 1000 скорость перехода в миллисекундах
       */
    });
  });
  /* */
  /* функция скролла при нажатии далее или назад*/
  function scrollToTop() {
    var curPos = $(document).scrollTop();
    var scrollTime = curPos / 1.73;
    $("body,html").animate({ "scrollTop": 0 }, scrollTime);
  };
  /* */
  /*валидация форм*/
  $(popupCallbackInputPhone).inputmask("+9 (999) 999-9999"); //specifying options
  $(orderInputPhone).inputmask("+9 (999) 999-9999"); //specifying options
  $(toughInputPhone).inputmask("+9 (999) 999-9999"); //specifying options
  /* */
  /*объявляем функции открытия и закрытия попапа */
  function openPopup(button, popup) {
    $(button).click(function () {
      $(overlay).fadeIn(300);
      setTimeout(function () {
        $(popup).fadeIn(300);
      }, 300);
    });
  };

  function closePopup(closeBtn, popup) {
    $(closeBtn).click(function () {
      $(popup).fadeOut(300);
      setTimeout(function () {
        $(overlay).fadeOut(300);
      }, 300);
    });
  };
  /* */
  /* открытие и закрытие главного попапа */
  var pageHeaderCallbackBtn = document.getElementsByClassName('page-header__callback-btn');
  var contactsCallbackBtn = document.getElementsByClassName('contacts__callback-btn');
  var pageHeaderCallbackBtnMobile = document.getElementsByClassName('page-header__callback-btn-mobile');

  openPopup(pageHeaderCallbackBtn, popupCallback);
  openPopup(pageHeaderCallbackBtnMobile, popupCallback);

  closePopup(popupCallbackCloseBtn, popupCallback);
  closePopup(popupSuccessCloseBtn, popupSuccess);
  /* */
  /* определяем месяц для order*/
  var monthDate = new Date();

  var orderMonthOffer = document.getElementById('order-month-offer');

  switch (monthDate.getMonth()) {
    case 0:
      orderMonthOffer.textContent = 'январе';
      break;
    case 1:
      orderMonthOffer.textContent = 'феврале';
      break;
    case 2:
      orderMonthOffer.textContent = 'марте';
      break;
    case 3:
      orderMonthOffer.textContent = 'апреле';
      break;
    case 4:
      orderMonthOffer.textContent = 'мае';
      break;
    case 5:
      orderMonthOffer.textContent = 'июне';
      break;
    case 6:
      orderMonthOffer.textContent = 'июле';
      break;
    case 7:
      orderMonthOffer.textContent = 'августе';
      break;
    case 8:
      orderMonthOffer.textContent = 'сентябре';
      break;
    case 9:
      orderMonthOffer.textContent = 'октябре';
      break;
    case 10:
      orderMonthOffer.textContent = 'ноябре';
      break;
    case 11:
      orderMonthOffer.textContent = 'декабре';
      break;
  }
  /* */
  /* слайдер utp */
  $("#utp-list-m").owlCarousel({
    responsive: {
      0: {
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 7000
      }
    }
  });
  /* */
  /* слайдер objects */
  $("#objects-list").owlCarousel({
    responsive: {
      0: {
        items: 1,
        margin: 20,
        loop: true,
        autoWidth: true,
        dots: false
      },
      768: {
        items: 1,
        margin: 20,
        loop: true,
        autoWidth: true,
        dots: false,
        nav: true
      },
      1366: {
        items: 1,
        margin: 30,
        loop: true,
        autoWidth: true,
        dots: false,
        nav: true
      }
    }
  });
  /* */
  /* переключаем описания УТП для планшетов + */
  var utpItemTableTablet = document.getElementsByClassName('utp__item-table--tablet');
  utpItemTableTablet = Array.prototype.slice.call(utpItemTableTablet);

  var utpDesitem = document.getElementsByClassName('utp__desitem');
  utpDesitem = Array.prototype.slice.call(utpDesitem);

  utpItemTableTablet.forEach(function (element, i) {
    $(element).click(function () {
      $(utpItemTableTablet).removeClass('utp__item-table--tablet-active');
      $(utpItemTableTablet[i]).addClass('utp__item-table--tablet-active');
      $(utpDesitem).fadeOut(300);
      setTimeout(function () {
        $(utpDesitem[i]).fadeIn(300);
      }, 300);
    });
  });
  /* */
  /* слайдер specs для мобильных устройств */
  $("#specs-list-mobile").owlCarousel({
    responsive: {
      0: {
        items: 1,
        loop: true,
        dots: true,
        nav: true
      }
    }
  });
  /* */
  /* слайдер feedback для мобильных устройств */
  $("#feedback-list").owlCarousel({
    responsive: {
      0: {
        items: 1,
        loop: true,
        dots: true,
        nav: false
      },
      768: {
        items: 2,
        margin: 7,
        loop: true,
        dots: true,
        nav: false
      },
      1366: {
        items: 2,
        margin: 30,
        loop: true,
        dots: true,
        nav: false
      }
    }
  });
  /* */
  /* отправка main форм */
  var popupCallbackForm = $('#popup-callback-form');

  popupCallbackForm.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/mail-plastic.php',
      data: popupCallbackForm.serialize(),
      success: function (data) {
        $(popupCallback).fadeOut(300);
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        $(popupCallbackInputPhone).val('');
        yaCounter49351264.reachGoal('form-common-submit');
        yaCounter49351264.reachGoal('form-callback-submit');
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка order форм */
  var orderForm = $('#order-form');

  orderForm.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/mail-plastic.php',
      data: orderForm.serialize(),
      success: function (data) {
        $(overlay).fadeIn(300);
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
          $(orderInputName).val('');
          $(orderInputPhone).val('');
        }, 300);
        yaCounter49351264.reachGoal('form-common-submit');
        yaCounter49351264.reachGoal('form-order-submit');
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка tough форм */
  var toughForm = $('#tough-form');

  toughForm.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/mail-plastic.php',
      data: toughForm.serialize(),
      success: function (data) {
        $(overlay).fadeIn(300);
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
          $(toughInputName).val('');
          $(toughInputPhone).val('');
        }, 300);
        yaCounter49351264.reachGoal('form-common-submit');
        yaCounter49351264.reachGoal('form-tough-submit');
      }
    });
    ev.preventDefault();
  });
  /* */

  var stage5PhoneInput = document.getElementById('stage-5-phone-input');

  /*открытие и закрытие попапа с калькулятором*/
  var introCalcBtn = document.getElementsByClassName('intro__calc-btn');

  var calculator = document.getElementsByClassName('calculator');
  var calculatorCloseBtn = document.getElementsByClassName('calculator__close-btn');


  $(introCalcBtn).click(function () {
    $(overlay).fadeIn(300);
    var calculatorTop = window.pageYOffset + 'px';
    $(calculator).css('top', calculatorTop);
    setTimeout(function () {
      $(calculator).fadeIn(300);
    }, 300);
  });

  $(contactsCallbackBtn).click(function () {
    $(overlay).fadeIn(300);
    var calculatorTop = window.pageYOffset + 'px';
    $(calculator).css('top', calculatorTop);
    setTimeout(function () {
      $(calculator).fadeIn(300);
    }, 300);
  });

  $(calculatorCloseBtn).click(function () {
    $(calculator).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });
  /* */
  /*работа калькулятора*/

  var stage1 = document.getElementsByClassName('stage-1');
  var stage2 = document.getElementsByClassName('stage-2');
  var stage3 = document.getElementsByClassName('stage-3');
  var stage4 = document.getElementsByClassName('stage-4');
  var stage5 = document.getElementsByClassName('stage-5');
  var stage6 = document.getElementsByClassName('stage-6');

  var goalTo2Trigger = false;
  var goalTo3Trigger = false;
  var goalTo4Trigger = false;
  var goalTo5Trigger = false;

  var techType;

  var techTypeInput = document.getElementById('tech-type-input');
  /*stage-1*/
  var stage1ErrorTxt = document.getElementsByClassName('stage-1__error-txt');

  var stage1Radio = document.getElementsByClassName('stage-1__radio');

  var stage1BtnNext = document.getElementsByClassName('stage-1__btn-next');

  $(stage1Radio).click(function () {
    techType = $(this).val();
    console.log(techType);
  });

  $(stage1BtnNext).click(function () {
    if (techType != undefined) {
      $(stage1ErrorTxt).addClass('disable');
      $(stage1).fadeOut(300);
      //scrollToTop();
      setTimeout(function () {
        $(stage2).fadeIn(300);
      }, 300);
      if (goalTo2Trigger == false) {
        /*gtag('event', 'form-to-2', {
          'event_category': 'form',
          'event_action': 'to-2',
        });*/

        goalTo2Trigger == true;
      }
    } else if (techType == undefined) {
      $(stage1ErrorTxt).removeClass('disable');
    }
  });
  /* */
  /*stage-2*/
  var windowWidth;
  var windowHeight;
  var stage2ErrorTxt = document.getElementsByClassName('stage-2__error-txt');

  var stage2InputWidth = document.getElementById('stage-2-input-width');
  var stage2InputHeight = document.getElementById('stage-2-input-height');

  var stage2BtnNext = document.getElementsByClassName('stage-2__btn-next');
  var stage2BtnPrev = document.getElementsByClassName('stage-2__btn-prev');

  $(stage2BtnNext).click(function () {
    if ($(stage2InputWidth).val() != '' || $(stage2InputHeight).val() != '') {
      $(stage2ErrorTxt).addClass('disable');
      $(stage2).fadeOut(300);
      windowWidth = $(stage2InputWidth).val();
      windowHeight = $(stage2InputHeight).val();
      console.log('Ширина: ' + windowWidth + ' Высота: ' + windowHeight);
      //scrollToTop();
      setTimeout(function () {
        $(stage3).fadeIn(300);
      }, 300);
      if (goalTo3Trigger == false) {
        /*gtag('event', 'form-to-3', {
          'event_category': 'form',
          'event_action': 'to-3',
        });*/

        goalTo3Trigger == true;
      }
    } else if ($(stage2InputWidth).val() == '' || $(stage2InputHeight).val() == '') {
      $(stage2ErrorTxt).removeClass('disable');
    }
  });

  $(stage2BtnPrev).click(function (event) {
    event.preventDefault();
    $(stage2).fadeOut(300);
    //scrollToTop();
    setTimeout(function () {
      $(stage1).fadeIn(300);
    }, 300);
  });
  /* */
  /*stage-3*/
  var stage3BtnNext = document.getElementsByClassName('stage-3__btn-next');
  var stage3BtnPrev = document.getElementsByClassName('stage-3__btn-prev');

  var dopType1;
  var dopType2;
  var dopType3;

  $(stage3BtnNext).click(function () {

    if ($('#stage-3-checkbox-1').prop('checked')) {
      dopType1 = $('#stage-3-checkbox-1').val();
    } else {
      dopType1 = '';
    }

    if ($('#stage-3-checkbox-2').is(':checked')) {
      dopType2 = $('#stage-3-checkbox-2').val();
    } else {
      dopType2 = '';
    }

    if ($('#stage-3-checkbox-3').is(':checked')) {
      dopType3 = $('#stage-3-checkbox-3').val();
    } else {
      dopType3 = '';
    }

    $(stage3).fadeOut(300);
    //scrollToTop();
    console.log(dopType1 + dopType2 + dopType3);
    setTimeout(function () {
      $(stage4).fadeIn(300);
    }, 300);
    if (goalTo4Trigger == false) {
      /*gtag('event', 'form-to-4', {
        'event_category': 'form',
        'event_action': 'to-4',
      });*/

      goalTo4Trigger == true;
    }
  });

  $(stage3BtnPrev).click(function (event) {
    event.preventDefault();
    $(stage3).fadeOut(300);
    //scrollToTop();
    setTimeout(function () {
      $(stage2).fadeIn(300);
    }, 300);
  });
  /* */
  /* stage-4 */
  var bonus;

  var stage4BtnNext = document.getElementsByClassName('stage-4__btn-next');
  var stage4BtnPrev = document.getElementsByClassName('stage-4__btn-prev');

  var stage4Radio = document.getElementsByClassName('stage-4__radio');
  $(stage4Radio).click(function () {
    bonus = $(this).val();
    console.log(bonus);
  });

  $(stage4BtnNext).click(function () {
    $(stage4).fadeOut(300);
    //scrollToTop();
    console.log(bonus);
    setTimeout(function () {
      $(stage5).fadeIn(300);
      $(techTypeInput).val('Тип окна: ' + techType + 'Ширина: ' + windowWidth + ' Высота: ' + windowHeight + ' Тип отделки: ' + dopType1 + ',' + dopType2 + ',' + dopType3 + ' Подарок: ' + bonus);
    }, 300);
    if (goalTo5Trigger == false) {
      /*gtag('event', 'form-to-5', {
        'event_category': 'form',
        'event_action': 'to-5',
      });*/

      goalTo5Trigger == true;
    }
  });

  $(stage4BtnPrev).click(function (event) {
    event.preventDefault();
    $(stage4).fadeOut(300);
    //scrollToTop();
    setTimeout(function () {
      $(stage3).fadeIn(300);
    }, 300);
  });
  /* */
  /*stage-5*/
  var stage5ErrorTxt = document.getElementsByClassName('stage-5__error-txt');

  var stage5NextBtn = document.getElementsByClassName('stage-5__btn-next');

  var stage5BtnPrev = document.getElementsByClassName('stage-5__btn-prev');

  var lastForm = $('#last-form');

  var stage5PhoneInput = document.getElementById('stage-5-phone-input');

  if ($(stage5PhoneInput).val() == undefined) {
    $(stage5ErrorTxt).removeClass('disable');
  }
  /* */
  /*определяем город
  var contactsLinkCity = document.getElementById('contacts-link-city');

  ymaps.ready(function () {
    var geolocation = ymaps.geolocation;
    contactsLinkCity.textContent = geolocation.city;
  });
  */

  lastForm.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/mail-calc.php',
      data: lastForm.serialize(),
      success: function (data) {
        $(stage5ErrorTxt).addClass('disable');
        $(stage5PhoneInput).val('');
        $(techTypeInput).val('');
        $(stage5).fadeOut(300);
        setTimeout(function () {
          $(stage6).fadeIn(300);
        }, 300);
        yaCounter49351264.reachGoal('form-common-submit');
        yaCounter49351264.reachGoal('form-quiz-submit');
        /*gtag('event', 'form-last', {
          'event_category': 'form',
          'event_action': 'last',
        });*/
        /*gtag('event', 'form-all', {
          'event_category': 'form',
          'event_action': 'all',
        });*/
      }

    });
    ev.preventDefault();
  });

  $(stage5BtnPrev).click(function (event) {
    event.preventDefault();
    $(stage5).fadeOut(300);
    setTimeout(function () {
      $(stage4).fadeIn(300);
    }, 300);
  });
  /* */
  /*stage-6*/
  var stage6Btn = document.getElementsByClassName('stage-6__btn');

  $(stage6Btn).click(function () {
    $(calculator).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });
  /* */
  /*Валидация форм*/
  $(stage5PhoneInput).inputmask("+9 (999) 999-9999"); //specifying options
  /* */
});