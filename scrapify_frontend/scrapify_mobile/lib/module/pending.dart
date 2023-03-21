import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:scrapify_mobile/module/add_product.dart';
import '../res/asset.dart';
import '../res/color.dart';
import '../res/style.dart';
import '../service/data_provider.dart';
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
    User user = Provider.of<User>(context);
    return Scaffold(
      body: Column(
        children: [
      Card(
      margin: EdgeInsets.all(16),
        child: Padding(
          padding: EdgeInsets.all(12),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    'Old clothes',
                    style: Font.subtitleLargeBold,
                  ),
                  Text('pending'),
                ],
              ),
              Row(
                children: [
                  Image.asset(
                    Id.clothes,
                    width: 120,
                    height: 120,
                  ),
                  Expanded(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              'Weight',
                              style: Font.textMedium,
                            ),
                            Text(
                              '2kg',
                              style: Font.textMedium,
                            ),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                             Text(
                              user.user.toString(),
                              style: Font.textMedium,
                            ),
                            Text(
                              'x2',
                              style: Font.textMedium,
                            ),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              'Recepient',
                              style: Font.textMedium,
                            ),
                            Text(
                              '3 matched',
                              style: Font.textMedium,
                            ),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            IconButton(
                              onPressed: () {},
                              icon: Icon(
                                Icons.delete,
                                color: Colors.red,
                              ),
                            ),
                          ],
                        )
                      ],
                    ),
                  ),
                ],
              )
            ],
          ),
        ))
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
