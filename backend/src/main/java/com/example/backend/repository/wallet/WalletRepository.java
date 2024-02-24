package com.example.backend.repository.wallet;

import com.example.backend.model.wallet.Wallet;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WalletRepository extends MongoRepository<Wallet, String> {
}
