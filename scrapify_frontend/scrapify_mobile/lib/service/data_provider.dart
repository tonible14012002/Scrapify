import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/foundation.dart';
import 'package:provider/provider.dart';

import '../navigation/navbar.dart';

// class User extends ChangeNotifier {
//   Map _user = {};
//
//   Map get user => _user;
//
//   void fetchUser() {
//     _user = {
//       "id": 9,
//       "username": "trinh",
//       "phone": "0901169496",
//       "email": "",
//       "address": null,
//       "is_recipient": false,
//       "recipient_profile": null,
//       "donor_profile": {
//         "id": 6,
//         "points": 0,
//       }
//     };
//     notifyListeners();
//   }
// }

class User extends ChangeNotifier {
  int _user = 0;
  int get user => _user;
  increment() {
    _user++;
    notifyListeners();
  }
}

class ProductProvider extends ChangeNotifier {
  List<Map> _items = [];
  List<Map> get items => _items;

  Future<List<Map>> fetchItems(int donorProfile) async {
    donorProfile = 1;
    final url = Uri.parse('http://172.16.2.206:8000/matching/items/?donor_profile=1');
    final response = await http.get(url);
    if (response.statusCode == 200) {
      final json = jsonDecode(response.body) as List;
      _items = json.cast<Map>();
      notifyListeners();
      return _items;
    } else {
      throw Exception('Failed to load data');
    }

  }
}

class Matched extends ChangeNotifier {
  Map _matched = {};

  Map get matched => _matched;

  Future<void> fetchMatched(int donorProfile) async {
    final url = Uri.parse('192.168.1.8:8000/matching/matching/?item__donor_profile=${donorProfile}');
    final response = await http.get(url);
    if (response.statusCode == 200) {
      _matched = json.decode(response.body);
      notifyListeners();
    } else {
      throw Exception('Failed to load data');
    }
  }
}

class DataProvider extends StatelessWidget {
  const DataProvider({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => ProductProvider()),
      ],
      child: Navbar(),
    );
  }
}


