package com.example.agenciaviagem.api.resource.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.agenciaviagem.exception.ErroException;
import com.example.agenciaviagem.model.entity.Usuario;
import com.example.agenciaviagem.model.repository.UsuarioRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/usuarios")
public class ResourceController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@GetMapping("/usuario")
	public List<Usuario> getAllUsuario(){
		return usuarioRepository.findAll();
	}
	
	@PostMapping("/usuario")
	public Usuario createdUsuario(@RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
	}
	
	@GetMapping("/usuario/{id}")
	public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long id){
		Usuario usuario = usuarioRepository.findById(id)
				.orElseThrow( () -> new ErroException("Usuario não existe com id: "+ id));
		return ResponseEntity.ok(usuario);
	}
	
	@PutMapping("/usuario/{id}")
	public ResponseEntity<Usuario> updateUsuario(@PathVariable Long id, @RequestBody Usuario usuarioDetails){
		Usuario usuario = usuarioRepository.findById(id)
				.orElseThrow(() -> new ErroException("Usuario não existe para esse id: "+id));
		
		usuario.setNome(usuarioDetails.getNome());
		usuario.setCpf(usuarioDetails.getCpf());
		usuario.setEndereco(usuarioDetails.getEndereco());
		usuario.setTelefone(usuarioDetails.getTelefone());
		usuario.setId_viagem(usuarioDetails.getId_viagem());
		
		Usuario updateUsuario = usuarioRepository.save(usuario);
		return ResponseEntity.ok(updateUsuario);
	}
	
	@DeleteMapping("/usuario/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUsuario(@PathVariable Long id){
		Usuario usuario = usuarioRepository.findById(id)
				.orElseThrow(() -> new ErroException("Usuário não esxiste para esse id: "+id));
		
		usuarioRepository.delete(usuario);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
