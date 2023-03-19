import 'package:flutter/material.dart';
import '../widget/product_card.dart';

class ConfirmedPage extends StatefulWidget {
  const ConfirmedPage({Key? key}) : super(key: key);

  @override
  State<ConfirmedPage> createState() => ConfirmedPageState();
}

class ConfirmedPageState extends State<ConfirmedPage> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ProductCard(),
      ],
    );
  }
}
