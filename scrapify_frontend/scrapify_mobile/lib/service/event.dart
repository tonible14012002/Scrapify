import 'dart:convert';
import 'package:http/http.dart' as http;

class EventApi {
  static const String url = 'http://192.168.1.8:8000/matching/events/';

  static Future<List<Map>> getEvent() async {
    final response = await http.get(Uri.parse(url));

    if (response.statusCode == 200) {
      final json = jsonDecode(response.body) as List;
      final result = json.cast<Map>();
      return result;
    }  else {
      return [];
    }
  }




}