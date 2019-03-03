/*
 WiFiEsp example: WebClient
 This sketch connects to google website using an ESP8266 module to
 perform a simple web search.
 For more details see: http://yaab-arduino.blogspot.com/p/wifiesp-example-client.html
*/

#include <WiFiEsp.h>
#include <MFRC522.h>
#include <SPI.h>
#include <SoftwareSerial.h>
// Emulate Serial1 on pins 6/7 if not present
#ifndef HAVE_HWSERIAL1

SoftwareSerial Serial1(6, 7); // RX, TX
#endif

#define SS_PIN 10
#define RST_PIN 9
MFRC522 mfrc522(SS_PIN, RST_PIN);

char ssid[] = "Pratz @OnePlus 5T";            // your network SSID (name)
char pass[] = "bombombomb";        // your network password
int status = WL_IDLE_STATUS;     // the Wifi radio's status

char server[] = "192.168.43.229";

String container, item1, item2;
String content= "";

// Initialize the Ethernet client object
WiFiEspClient client;

void setup()
{
  // initialize serial for debugging
  Serial.begin(115200);
  // initialize serial for ESP module
  Serial1.begin(9600);
  // initialize ESP module
  WiFi.init(&Serial1);

  // check for the presence of the shield
  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println("WiFi shield not present");
    // don't continue
    while (true);
  }

  // attempt to connect to WiFi network
  while ( status != WL_CONNECTED) {
    Serial.print("Attempting to connect to WPA SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network
    status = WiFi.begin(ssid, pass);
  }

  // you're connected now, so print out the data
  Serial.println("You're connected to the network");

  printWifiStatus();

  //RFID Scanner
  SPI.begin();
  mfrc522.PCD_Init();
  Serial.println("Approximate your card to the reader...\n");
}


void pushToServer() {
  Serial.println();
  Serial.println("Starting connection to server...");
  // if you get a connection, report back via serial
  if (client.connect(server, 8081)) {
    Serial.println("Connected to server");
    // Make a HTTP request
    String arguments="?id="+container+"&"+item1+"&"+item2;
    //client.println("GET /rec.php?id=10 HTTP/1.1");
    client.println("GET /makePallet"+arguments+" HTTP/1.1");
    client.println("Host: 192.168.43.229");
    client.println("Connection: close");
    client.println();
  }
}

void loop() {
  
  //Show UID on serial monitor
  Serial.println("Scan the pallet:");
  checkTag();
  scanTag();
  container=content;
  delay(1000);
  
  Serial.println("Scan the first carton:");
  checkTag();
  scanTag();
  item1=content;
  delay(1000);
  
  Serial.println("Scan the second carton:");
  checkTag();
  scanTag();
  item2=content;
  delay(1000);
  pushToServer();
  delay(5000);
}

void checkTag() {
  while(!(mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial())){
    }
}
void scanTag(){
  Serial.print("UID tag :");
  content="";
  byte letter;
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
     //Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
     //Serial.print(mfrc522.uid.uidByte[i], HEX);
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));
  }  
  content.toUpperCase();
  Serial.println(content);
  Serial.println();
  //sdelay(1000);
}


void printWifiStatus()
{
  // print the SSID of the network you're attached to
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your WiFi shield's IP address
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength
  long rssi = WiFi.RSSI();
  Serial.print("Signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}

  /*// if there are incoming bytes available
  // from the server, read them and print them
  /*while (client.available()) {
    char c = client.read();
    Serial.write(c);
  }*/

  // if the server's disconnected, stop the client
  /*if (!client.connected()) {
    Serial.println();
    Serial.println("Disconnecting from server...");
    client.stop();

    // do nothing forevermore
   // while (true);
  }*/
