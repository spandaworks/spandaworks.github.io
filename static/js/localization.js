$(document).ready(function() {
  var i18nOpts = {
    lng: 'en',
    fallbackLng: 'en',
    resGetPath: 'static/locales/__lng__.json'
  };

  var translate = function() {
    $('.i18container').i18n();
      // $('#i18_navbar').i18n();
    $('#i18_nav_about').i18n();
    $('#i18_blog_link').i18n();
    $('#i18_about_me').i18n();
    $('#i18_blog_button').i18n();
    $('#i18_home').i18n();    
  };

  $("[id^=set_lang]").each(function() {
    var $this = $(this);
    $this.on('click', function() {
      i18n.setLng($this.data('locale'), translate);
    });
  });

  $.i18n.init(i18nOpts, translate);
});
