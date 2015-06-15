var detectIOSMultitask = function(callback) {

    var inMultitask;

    function report(event) {
      callback({ event: event, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
    }

    if (navigator.userAgent.match(/iPad/i) == null) {
      return;
    }

    if (document.documentElement.clientWidth < 768) {
      inMultitask = true;
      report('load');
    }

    window.onresize = function() {

      if (document.visibilityState != 'visible') {
        inMultitask = false;
        return;
      }

      if (document.documentElement.clientWidth < 768) {

        if (inMultitask) {
          report('resize');
        } else {
          inMultitask = true;
          report('enter');
        }
      } else {
        inMultitask = false;
        report('exit');
      }
    }

    /*
     * For when Safari is the secondary app and is brought into view in Slide Over mode, which doesn't
     * always trigger a resize.
     */
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState == 'visible' && document.documentElement.clientWidth == 320) {
        inMultitask = true;
        report('enter')
      }
    }, false);

};