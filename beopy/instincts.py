# Beowulf - instincts.py
# inherit truths of the physical machine
import subprocess
import json


   
def me():
    # get hardware id
    id = subprocess.Popen('hal-get-property --udi /org/freedesktop/Hal/devices/computer --key system.hardware.uuid'.split())
    data = ['id']
    with open ('me.json' , 'w') as outfile:
        json.dump(data, outfile)