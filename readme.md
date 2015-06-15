# Detect iOS Multitask Mode in Safari
```
<script>
  detectIOSMultitask(function(data) {
    
    // data.event = 'load', 'enter', or 'exit'
    console.log( data['event'], data['width'], data['height'] );
    
    // Example Google Analytics event
    ga('send', 'event', 'iOS Multitask', data['event'], data['width'] + 'x' + data['height'], {'nonInteraction': 1});
    
  });
</script>
```
