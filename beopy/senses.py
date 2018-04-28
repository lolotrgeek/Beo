# Beowulf - Sense.py
# Sense the physical environment 

import sys
import time
from datetime import datetime
import RPi.GPIO as io

#injects
import instincts
import cluster

# what are your senses?
io.setmode(io.BCM)
SHUTOFF_DELAY = 60 # seconds
#motion
PIR_PIN = 14       # 8 on the board (Also tried 25, 24, and 23)

# use them
def init():
    
    print 'sensing...'

    # sense motion
    io.setup(PIR_PIN, io.IN, pull_up_down=io.PUD_DOWN)
    io.add_event_detect(PIR_PIN, io.RISING, callback=sensed, bouncetime=300)
    
    while True:

        sys.stdout.flush()
        time.sleep(1)
    
def sensed(stimulus):

    # something moved...
    if stimulus == 14:
        print 'motion'

    when = datetime.utcnow()

    sys.stdout.flush()
    return stimulus
    
