import csv
import json

csvfile = open('apps.csv', 'r', encoding="utf8")
jsonfile = open('app.json', 'w')

fieldnames = ("app_id","trackName")
reader = csv.DictReader( csvfile, fieldnames)
jsonfile.write('[\n')
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write(',\n')
jsonfile.write(']')