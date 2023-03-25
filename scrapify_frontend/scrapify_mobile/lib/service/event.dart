import 'dart:convert';
import 'package:http/http.dart' as http;

class EventApi {
  static const ipConfig = '192.168.1.14:8000';
  static const String url = 'http://${ipConfig}/matching/events/?closed=false';

  static Future<List<Map>> getEvent() async {
    print('chua chay');
    final response = await http.get(Uri.parse(url));
    print('da chay');
    if (response.statusCode == 200) {
      final json = jsonDecode(response.body) as List;
      final result = json.cast<Map>();
      return result;
    }  else {
      return [];
    }
  }
}