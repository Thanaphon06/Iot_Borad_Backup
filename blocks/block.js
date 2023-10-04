Blockly.defineBlocksWithJsonArray([
{
    
    "type":"tem_reader", // ตั้งชื่อของตัวบล็อก
        "message0":"Read %1 pin %2",
        "args0":[

            {
                "type": "field_dropdown",//ประเภท dropdown
                "name": "value", // ชื่อของ dropdown เวลาเรียกใช้งาน
                "options":[ //ตัวเลือก
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
                "type": "input_value", //ประเภทใส่ข้อมูลตัวเลข
                "name": "tem_pin",//ชื่อของช่องนี้
                "check": "Number"//ตรวจสอบตัวเลข
            }
        ],
        "inputsInline": true, //สามารถต่อบล็อกจากด้านข้าง
        "output": "Number",
        "colour": "#8E44AD", //สีของบล็อก

        
}



])