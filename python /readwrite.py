#!/usr/bin/python
# -*- coding: UTF-8 -*-
# läs och skriv till fil

def main():
    count = 0; 
    infile = open('thewasteland.txt', 'r')
    outfile = open('output.txt', 'w')
    for line in infile:
        print(count)
        if count < 4:
            outfile.write(line) 
            print(line);
       
        count=count+1

    outfile.close()
    print('\ndone.')

if __name__ == '__main__': main()

