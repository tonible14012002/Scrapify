import 'dart:convert';
import 'package:http/http.dart' as http;

class ProductApi {
  static const String url = 'http://192.168.1.14:8000/matching/items/';

  static Future<bool> createProduct(Map body) async {
    print(body);
    final response = await http.post(
      Uri.parse(url),
      body: jsonEncode(body),
      headers: {'Content-Type': 'application/json'},
    );
    return response.statusCode >= 200 && response.statusCode <= 300;
  }

  static Future<bool> deleteProduct(int id) async {
    final response = await http.delete(
      Uri.parse('${url}${id}/'),
      headers: {'Content-Type': 'application/json'},
    );
    print(response.body);
    return response.statusCode >= 200 && response.statusCode <= 300;
  }
}
