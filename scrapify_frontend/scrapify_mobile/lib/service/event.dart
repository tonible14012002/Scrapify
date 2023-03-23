import 'dart:convert';
import 'package:http/http.dart' as http;

class EventApi {
  static const String url = 'http://172.16.2.206:8000/matching/events/?closed=false';

  static Future<List<Map>> getEvent() async {
    print('thiss iss print');
    final response = await http.get(Uri.parse(url));
    print('this is print ${response}');
    if (response.statusCode == 200) {
      final json = jsonDecode(response.body) as List;
      final result = json.cast<Map>();
      return result;
    }  else {
      return [];
    }
  }



}