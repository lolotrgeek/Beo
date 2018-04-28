# Beowulf - awake.py
# Welcome to reality.

import time
import instincts
import senses

def main():
    # can you speak?
    print 'Awake'

    # what are you?
    print instincts.what

    # what is the time?
    alive = time.time()

    # can you feel anything?
    senses.init()

    # what's the last thing you remember?
    #import memories

    
# live and die gracefully.    
if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        senses.io.cleanup()