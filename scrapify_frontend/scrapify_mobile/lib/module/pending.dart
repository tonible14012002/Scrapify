import 'package:flutter/material.dart';
import 'package:scrapify_mobile/module/add_product.dart';
import '../res/color.dart';
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
    return Scaffold(
      body: Column(
        children: [
          ProductCard(),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Cl.brandPrimaryBase,
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => const AddProduct(),
            ),
          );
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
