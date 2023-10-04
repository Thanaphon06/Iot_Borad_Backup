Blockly.defineBlocksWithJsonArray([
    {
    "type":"switch_iot",
        "message0": "Switch Pin:%1 is put",
        "args0":[
            {
                "type": "input_value",
                "name": "pin",
                "check": "Number"
            },
        ],
      "output": ["Number", "Boolean"],
      "inputsInline": true,
      //"peviousStatement": null,
      //"nextStatement": null,
      "colour": "#9400d3",
      "tooltip": "",
      "helpUrl": ""
      
      },
      {
        "type": "tem_read",
        "message0": " DHT22 read %1 pin %2",
        "args0": [
          
          
          {
            "type": "field_dropdown",
            "name": "valueIndex",
            "options": [
              [
                "temperature",
                "0"
              ],
              [
                "humidity",
                "1"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "pin",
            "check": "Number"
          },
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": "#8E44AD",
        "tooltip": "",
        "helpUrl": ""
      },
    
    ])
 