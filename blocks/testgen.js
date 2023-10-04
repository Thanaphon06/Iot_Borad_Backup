Blockly.Python['switch_iot'] = function(block) {
 
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    

    var code = `(Pin(${value_pin}, Pin.IN).value()) == 1`;
    return [code, Blockly.Python.ORDER_NONE];
  };
Blockly.Python['tem_read'] = function(block) {

  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dht'] = 'import dht';

  var functionName = Blockly.Python.provideFunction_(
    'DHT_Read',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(type, pin):',
    '  try:',
    '    if type == 11:',
    '      d = dht.DHT11(Pin(pin))',
    '    elif type == 22:',
    '      d = dht.DHT22(Pin(pin))',
    '    else:',
    '      return [ -999, -999 ]',
    '    d.measure()',
    '    return [ d.temperature(), d.humidity() ]',
    '  except:',
    '    print("DHT read error")',
    '    return [ -999, -999 ]']);

    var functionNameTemperature = Blockly.Python.provideFunction_(
      'temperature_sensor',[
        'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ +'(pin):',
        ' return DHT_Read(pin, 2)[0]'
      ]
    );
    var functionNameSensor = Blockly.Python.provideFunction_(
      'humidity_sensor',[
        'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ +'(pin):',
        ' return DHT_Read(pin, 2)[1]'
      ]
    );
   
    var dropdown_valueindex = block.getFieldValue('valueIndex');
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    code = '';;
    if(dropdown_valueindex == "0"){
      code = `temperature_sensor(${value_pin})`;
    }
    else if(dropdown_valueindex == "1"){
      code = `humidity_sensor(${value_pin})`;
    }
    
    return code;
};