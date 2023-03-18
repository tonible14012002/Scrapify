import 'package:flutter/material.dart';
import 'package:scrapify_mobile/navigation/navbar.dart';

class StackNavigator extends StatefulWidget {
  const StackNavigator({Key? key}) : super(key: key);

  @override
  State<StackNavigator> createState() => StackNavigatorState();
}

class StackNavigatorState extends State<StackNavigator> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: 'signed_in',
      routes: <String, Widget Function(BuildContext)>{
        'signed_in': (context) => const Navbar()
      },
    );
  }
}
