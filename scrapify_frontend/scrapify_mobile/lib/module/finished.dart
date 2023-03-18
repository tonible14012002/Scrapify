import 'package:flutter/material.dart';
import '../widget/product_card.dart';

class FinishedPage extends StatefulWidget {
  const FinishedPage({Key? key}) : super(key: key);

  @override
  State<FinishedPage> createState() => FinishedPageState();
}

class FinishedPageState extends State<FinishedPage> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ProductCard(),
      ],
    );
  }
}
