# Beowulf - cluster.py
# get/put to the cluster

import json
import instincts

def cluster():
    # step into the culster
    with open('data.json') as data_file:    
        data = json.load(data_file)
    
        # walk through it
        events = data['beo'][0]['events']
        
        memories = data['beo'][0]['memories']
        
        patterns = data['beo'][0]['patterns']
        
    
    

