import 'package:flutter/material.dart';
import '../widget/product_card.dart';

class PendingPage extends StatefulWidget {
  const PendingPage({
    Key? key,
  }) : super(key: key);

  @override
  State<PendingPage> createState() => PendingPageState();
}

class PendingPageState extends State<PendingPage> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ProductCard(),
      ],
    );
  }
}
