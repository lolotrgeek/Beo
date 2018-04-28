# Beowulf - memorize.py
# form memories

import time
import json 
from datetime import datetime, timedelta

# injects
import instincts
import cluster
import events


def recall(event):
        
    while True:
        
        now = datetime.utcnow()
        
        # timedelta, find how long ago did event occur?
        t = now - when
        
        # threshold in milliseconds
        threshold = t.total_seconds() * 1000

        # rapid succession: if the event occured 1 second ago...
        if threshold < 1:
            print now
            # ... threshold is crossed
            print 'crossed'
            print threshold
            return True
            
            json 
            
        else :
            print 'not crossed'
            return False
                
            