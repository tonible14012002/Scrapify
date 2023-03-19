import 'package:flutter/material.dart';
import '../widget/product_card.dart';

class MatchedPage extends StatefulWidget {
  const MatchedPage({Key? key}) : super(key: key);

  @override
  State<MatchedPage> createState() => MatchedPageState();
}

class MatchedPageState extends State<MatchedPage> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ProductCard(),
      ],
    );
  }
}
