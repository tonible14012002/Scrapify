import 'package:flutter/material.dart';
import 'package:scrapify_mobile/res/asset.dart';
import 'package:scrapify_mobile/res/style.dart';
import 'package:scrapify_mobile/widget/tag.dart';

class ProductCard extends StatefulWidget {
  const ProductCard({Key? key}) : super(key: key);

  @override
  State<ProductCard> createState() => ProductCardState();
}

class ProductCardState extends State<ProductCard> {
  @override
  Widget build(BuildContext context) {
    return Card(
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
                              'Count',
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
                              'recipient',
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
        ));
  }
}
