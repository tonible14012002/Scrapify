import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:scrapify_mobile/module/add_product.dart';
import '../res/asset.dart';
import '../res/color.dart';
import '../res/style.dart';
import '../service/data_provider.dart';

class PendingPage extends StatefulWidget {
  const PendingPage({
    Key? key,
  }) : super(key: key);

  @override
  State<PendingPage> createState() => PendingPageState();
}

class PendingPageState extends State<PendingPage> {
  List<Map> items = [];
  Future<void> getItems() async {
    final response = await Provider.of<ProductProvider>(context, listen: false).fetchItems(1);
    setState(() {
      items = response;
    });
  }

  @override
  void initState() {
    super.initState();
    print(items);
    getItems();
    print(items);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // body: Column(
      //   children: [
      //     items.isEmpty ? CircularProgressIndicator() :
      //     Card(
      //       margin: EdgeInsets.all(16),
      //       child: Padding(
      //         padding: EdgeInsets.all(12),
      //         child: Column(
      //           crossAxisAlignment: CrossAxisAlignment.start,
      //           children: [
      //             Row(
      //               mainAxisAlignment: MainAxisAlignment.spaceBetween,
      //               children: [
      //                 Text(
      //                   'Old clothes',
      //                   style: Font.subtitleLargeBold,
      //                 ),
      //                 Text('pending'),
      //               ],
      //             ),
      //             Row(
      //               children: [
      //                 Image.asset(
      //                   Id.clothes,
      //                   width: 120,
      //                   height: 120,
      //                 ),
      //                 Expanded(
      //                   child: Column(
      //                     mainAxisAlignment: MainAxisAlignment.spaceBetween,
      //                     children: [
      //                       Row(
      //                         mainAxisAlignment: MainAxisAlignment.spaceBetween,
      //                         children: [
      //                           Text(
      //                             'Weight',
      //                             style: Font.textMedium,
      //                           ),
      //                           Text(
      //                             '2kg',
      //                             style: Font.textMedium,
      //                           ),
      //                         ],
      //                       ),
      //                       Row(
      //                         mainAxisAlignment: MainAxisAlignment.spaceBetween,
      //                         children: [
      //                           Text(
      //                             'Count',
      //                             style: Font.textMedium,
      //                           ),
      //                           Text(
      //                             'x2',
      //                             style: Font.textMedium,
      //                           ),
      //                         ],
      //                       ),
      //                       Row(
      //                         mainAxisAlignment: MainAxisAlignment.spaceBetween,
      //                         children: [
      //                           Text(
      //                             'Recipient',
      //                             style: Font.textMedium,
      //                           ),
      //                           Text(
      //                             '3 matched',
      //                             style: Font.textMedium,
      //                           ),
      //                         ],
      //                       ),
      //                       Row(
      //                         mainAxisAlignment: MainAxisAlignment.end,
      //                         children: [
      //                           IconButton(
      //                             onPressed: () {},
      //                             icon: Icon(
      //                               Icons.delete,
      //                               color: Colors.red,
      //                             ),
      //                           ),
      //                         ],
      //                       )
      //                     ],
      //                   ),
      //                 ),
      //               ],
      //             )
      //           ],
      //         ),
      //       ),
      //     ),
      //   ],
      // ),
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: Column(
          children: [
            Consumer<ProductProvider>(
              builder: (context, product, child) => product.items.isEmpty
                  ? CircularProgressIndicator()
                  : ListView.builder(
                      shrinkWrap: true,
                      itemCount: product.items.length,
                      itemBuilder: (context, index) {
                        final item = product.items[index];
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
                                      item['name'],
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
                                                item['weight'],
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
                                                item['count'].toString(),
                                                style: Font.textMedium,
                                              ),
                                            ],
                                          ),
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                            children: [
                                              Text(
                                                'Recipient',
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
                          ),
                        );
                      },
                    ),
            ),
          ],
        ),
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
