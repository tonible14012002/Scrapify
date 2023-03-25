import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:scrapify_mobile/module/add_product.dart';
import '../res/asset.dart';
import '../res/color.dart';
import '../res/style.dart';
import '../service/data_provider.dart';
import '../service/product.dart';

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
    final response = await Provider.of<ProductProvider>(context, listen: false)
        .fetchItems(1);
    setState(() {
      items = response;
    });
  }

  Future<void> deleteItem(int id) async {
    print('chua xoa');
    final isSuccess = await ProductApi.deleteProduct(id);
    print('xoa');
    if (isSuccess) {
      setState(() {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Success to delete.'),
          ),
        );
      });
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Failed to delete.' ),
        ),
      );
    }
  }

  @override
  void initState() {
    super.initState();
    getItems();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: Column(
          children: [
            Consumer<ProductProvider>(
              builder: (context, provider, child) => provider.items.isEmpty
                  ? const CircularProgressIndicator()
                  : ListView.builder(
                      shrinkWrap: true,
                      itemCount: provider.items.length,
                      itemBuilder: (context, index) {
                        final item = provider.items[index];
                        return Card(
                          margin: const EdgeInsets.all(16),
                          child: Padding(
                            padding: const EdgeInsets.all(12),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text(
                                      item['name'],
                                      style: Font.subtitleLargeBold,
                                    ),
                                  ],
                                ),
                                Row(
                                  children: [
                                    Image.asset(
                                      Id.clothes,
                                      width: 120,
                                      height: 120,
                                    ),
                                    const SizedBox(width: 16),
                                    Expanded(
                                      child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceBetween,
                                        children: [
                                          Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.spaceBetween,
                                            children: [
                                              const Text(
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
                                            mainAxisAlignment:
                                                MainAxisAlignment.spaceBetween,
                                            children: [
                                              const Text(
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
                                            mainAxisAlignment:
                                                MainAxisAlignment.spaceBetween,
                                            children: [
                                              const Text(
                                                'Recipient',
                                                style: Font.textMedium,
                                              ),
                                              Text(
                                                item['id'].toString(),
                                                style: Font.textMedium,
                                              ),
                                            ],
                                          ),
                                          Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.end,
                                            children: [
                                              IconButton(
                                                onPressed: () {
                                                  deleteItem(item['id']);
                                                },
                                                icon: const Icon(
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
