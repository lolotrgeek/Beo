# Beowulf - dream.py
# When the Cluster sleeps it dreams and processes the data.
# Builds long-term memories.

import sleep

import numpy as np

# make sure the node can dream
try: 
    import tensorflow as tf
except:
    print 'I cannot dream.'
    print sys.exc_info()
    exit

# One node acts as the synapse (master)

# Other nodes act as neurons (workers)

# if synapse dies, a neuron becomes synapse



# long term memories are based on events that feel: useful, frequent, and strange


# useful

# frequent

# strange