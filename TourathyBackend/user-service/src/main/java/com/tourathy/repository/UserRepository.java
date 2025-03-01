package com.tourathy.repository;

import com.tourathy.model.User;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import java.util.List;
import java.util.Optional;

@ApplicationScoped
public class UserRepository implements PanacheRepository<User> {

    // Récupérer tous les utilisateurs
    public List<User> getAllUsers() {
        return listAll();
    }

    // Récupérer un utilisateur par ID
    public Optional<User> getUserById(Long id) {
        return findByIdOptional(id);
    }

    // Récupérer un utilisateur par nom
    public Optional<User> getUserByName(String name) {
        return find("name", name).firstResultOptional();
    }

    // Ajouter un nouvel utilisateur
    public void addUser(User user) {
        persist(user);
    }

    // Supprimer un utilisateur par ID
    public boolean deleteUserById(Long id) {
        return deleteById(id);
    }
}
