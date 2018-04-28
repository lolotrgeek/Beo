# Beowulf - listen.py
# listen to the node

import sys
import json
import numpy as np
import tensorflow as tf

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()

    #create a numpy array
    np_lines = np.array(lines)

    print np_lines

    #use numpys sum method to find sum of all elements in the array
    #lines_sum = np.sum(np_lines)

    lines_sum = tf.contrib.learn.KMeansClustering.fit(np_lines)

    print lines_sum

    #return the sum to the output stream
    #print lines_sum

#start process
if __name__ == '__main__':
    main()